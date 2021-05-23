import { Container } from "./styles";

export function ActivyTable(){

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidades Curricular</th>
                        <th>Atividade</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>10</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>10</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Programação Web</td>
                        <td>Desenvolvimento do Frontend</td>
                        <td>10</td>
                        <td>10/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}