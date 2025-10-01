import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import toast from "react-hot-toast";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

const Label = styled.label`
    font-weight: 500;
`;

function CreateCabinForm() {
    const { register, handleSubmit, reset, getValues, formState } = useForm();

    const { errors } = formState;

    const queryClient = useQueryClient();

    const { isLoading: isCreating, mutate } = useMutation({
        mutationFn: createCabin,

        onSuccess: () => {
            toast.success("Cabin created successfully");
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            });
            reset();
        },

        onError: (err) => toast.error(err.message),
    });

    function onSubmit(data) {
        mutate(data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormRow label="Cabin name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: "This field is required",
                    })}
                    disabled={isCreating}
                />
            </FormRow>
            <FormRow
                label="Maximum capacity"
                error={errors?.maxCapacity?.message}
            >
                <Input
                    type="number"
                    id="maxCapacity"
                    {...register("maxCapacity", {
                        required: "This field is required",
                        min: {
                            value: 1,
                            message: "The cabin should be more than 1 at least",
                        },
                    })}
                    disabled={isCreating}
                />
            </FormRow>
            <FormRow
                label="Regular price"
                error={errors?.regularPrice?.message}
            >
                <Input
                    type="number"
                    id="regularPrice"
                    {...register("regularPrice", {
                        required: "This field is required",
                    })}
                    disabled={isCreating}
                />
            </FormRow>
            <FormRow label="Discount" error={errors?.discount?.message}>
                <Input
                    type="number"
                    id="discount"
                    defaultValue={0}
                    {...register("discount", {
                        required: "This field is required",
                        validate: (value) =>
                            +value < getValues().regularPrice ||
                            "The discount should be less than the full price",
                    })}
                    disabled={isCreating}
                />
            </FormRow>
            <FormRow
                label="Description for website"
                error={errors?.description?.message}
            >
                <Textarea
                    type="number"
                    id="description"
                    defaultValue=""
                    {...register("description", {
                        required: "This field is required",
                    })}
                    disabled={isCreating}
                />
            </FormRow>

            <FormRow>
                <Label htmlFor="image">Cabin photo</Label>
                <FileInput id="image" accept="image/*" />
            </FormRow>

            <FormRow>
                {/* type is an HTML attribute! */}
                <Button variation="secondary" type="reset">
                    Cancel
                </Button>
                <Button>
                    {isCreating ? "Creating a cabin ..." : "Add cabin"}
                </Button>
            </FormRow>
        </Form>
    );
}

export default CreateCabinForm;
