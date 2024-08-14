import { Heading, Text, MultiStep, TextInput, Button } from "@ignite-ui/react";
import { Container, Header } from "../styles";
import { ArrowRight } from "phosphor-react";
import { z } from "zod";
import { ConnectBox, ConnectItem } from "./styles";
import { signIn, useSession } from "next-auth/react";


const registerFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
        .regex(/^([a-z\\-]+)$/i, { message: 'O usuário só pode conter letras minúsculas e hífens.' })
        .transform(value => value.toLowerCase()),

    name: z.string()
        .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' })

})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {

    const session = useSession()

    async function handleRegister(data: RegisterFormData) {


    }

    return (
        <Container>
            <Header>
                <Heading as='strong'>Conecte sua agenda!</Heading>
                <Text>
                    Conecte o seu calendário para verificar automaticamente as horas
                    ocupadas e os novos eventos á medida em que são agendados.
                </Text>

                <MultiStep size={4} currentStep={2} />
            </Header>
            <ConnectBox>
                <ConnectItem>
                    <Text>Google Calendar</Text>
                    <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => {
                            signIn('google')
                        }}
                    >
                        Conectar
                    </Button>
                </ConnectItem>
                <Button type='submit'>
                    Próximo passo
                    <ArrowRight />
                </Button>
            </ConnectBox>

        </Container>
    )
}