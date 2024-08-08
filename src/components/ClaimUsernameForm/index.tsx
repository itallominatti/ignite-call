import { Button, TextInput, Text } from "@ignite-ui/react";
import { Form, FormAnnotation } from "./styles";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";

const claimUsernameFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'O usuário precisa ter pelo menos 3 digitos' })
        .regex(/^([a-z\\-]+)$/i, {
            message: 'O usuário só pode conter letras e hifens.'
        })
        .transform(value => value.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export function ClainUsernameForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema),
    });

    const router = useRouter();

    async function handleClaimUsername(data: ClaimUsernameFormData) {
        const { username } = data;

        await router.push(`/register?username=${username}`);
    }

    return (
        <>
            <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
                {/* @ts-ignore */}
                <TextInput
                    size="sm"
                    prefix="ignite.com/"
                    placeholder="Seu usuário"
                    {...register('username')}
                />
                <Button size='sm' type='submit'>
                    Reservar
                    <ArrowRight size={24} />
                </Button>


            </Form>
            <FormAnnotation>
                <Text size='sm'>
                    {errors.username ? errors.username.message : 'Digite o nome do usuário desejado'}
                </Text>
            </FormAnnotation>
        </>
    )
}