import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
    const { data, error } = await supabase.from("cabins").select("*");

    if (error) {
        console.error(error);
        throw new Error("Cabins couldn't be found");
    }

    return data;
}

export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

    const imageName = `${Math.random()}-${newCabin.name}`.replaceAll("/", "");

    const imagePath = hasImagePath
        ? newCabin.image
        : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    // 1- Create/Edit the Cabin

    let query = supabase.from("cabins");

    if (!id) {
        query = query.insert([{ ...newCabin, image: imagePath }]);
    }

    if (id) {
        query = query
            .update({ ...newCabin, image: imagePath })
            .eq("id", id)
            .select();
    }

    const { data, error } = await query.select().single();

    if (error) {
        console.error(error);
        throw new Error("Cabin couldn't be created");
    }

    // 2- Upload the image
    const { error: storageError } = await supabase.storage
        .from("cabin-images")
        .upload(imageName, newCabin.image);

    if (storageError) {
        await supabase.from("cabins").delete().eq("id", data.id);
        throw new Error("Cabin Image couldn't upload correctly");
    }

    return data;
}

export async function deleteCabin(id) {
    const { data, error } = await supabase.from("cabins").delete().eq("id", id);

    if (error) {
        console.error(error);
        throw new Error("Cabin couldn't be deleted");
    }

    return data;
}
