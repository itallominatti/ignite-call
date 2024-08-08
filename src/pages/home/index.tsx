import { Heading, Text } from "@ignite-ui/react";
import Image from "next/image";
import { Container, Hero, Preview } from "./styles";

import previewImage from '../../assets/preview.png';
import { ClainUsernameForm } from "@/components/ClaimUsernameForm";


export default function Home() {

    return (

        <Container>
            <Hero>
                <Heading size="4xl">Agendamento descomplicado</Heading>
                <Text size="xl">
                    Conecte seu calendário e permita que as pessoas marquem agendamentos
                    no seu tempo livre.
                </Text>

                <ClainUsernameForm />
            </Hero>
            <Preview>
                <Image src={previewImage}
                    width={400}
                    height={400}
                    quality={100}
                    priority
                    alt="Calendário simbolizando como o agendamento funciona"
                />
            </Preview>
        </Container>
    )

}