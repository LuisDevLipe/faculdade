Aluno: Luis Felipe Macedo dos Santos \
Turma: ADS501N - Bonsucesso

# Relatório Preliminar Projeto - 5º Semestre

Relatório dos conhecimentos adquiridos durante o curso AWS Cloud Foundations, ministrado pela AWS Academy até a data 03/04/2026.

Como matéria do 5º semestre do curso de Análise e Desenvolvimento de Sistemas, estudaremos o curso AWS Cloud Foundations, que tem como objetivo fornecer uma visão geral dos conceitos e serviços da AWS. O curso é dividido que abordam diferentes diferentes, desde infrastrutura global até segurança e gestão de custos.

### Nuvem (AWS) Visão Geral.

#### Vantagens

Menos custo de hardware, software e licenciamento. Menos tempo gasto em manutenção e suporte. Maior agilidade na criação de recursos, serviços e funcionalidades. Escabalabilidade e flexibilidade em escala global. Segurança e conformidade em nível empresarial sem custos adicionais.

#### Economia

Custo variável, computação sob demanda, sem custos iniciais, custo a longo prazo tende a ser mais baixo. Não há necessidade de investimento em hardware. Otimização de custos com AWS Trusted Advisor, AWS Cost Explorer, AWS Budgets e AWS Cost and Usage Report. Velocidade de transferência entre servidores é garantida sem custos adicionais. O time de TI pode se concentrar em estratégia e inovação, em vez de manutenção e suporte.

#### Definição de preço

Produtos de computação são classificados em 3 categorias:
<table>
    <thead>
        <tr>
            <th>Tipo de aluguel</th>
            <th>Compute Savings Plans</th>
            <th>EC2 Instances Savings Plans</th>
            <th>Sob demanda</th>
            <th>Instâncias Spot</th>
            <th>Instâncias reservadas padrão</th>
            <th>Instâncias reservadas conversíveis</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Instâncias compartilhadas</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Não</td>
            <td>Não</td>
        </tr>
        <tr>
            <td>Instâncias dedicadas</td>
            <td>Não</td>
            <td>Não</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Sim</td>
        </tr>
        <tr>
            <td>Hosts dedicados</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Sim</td>
            <td>Não</td>
            <td>Sim</td>
            <td>Não</td>
        </tr>
    </tbody>
</table>

Para esses 3 tipos de aluguel (hosts, instâncias dedicadas e instâncias compartilhadas) existem as seguintes oções de compra: 
**Sob demanda**: É pago por hora ou segundo, dependendo do tipo de instância, sem compromisso a longo prazo. Ideal para cargas de trabalho imprevisíveis ou de curto prazo.
     
**Instâncias reservadas**:

- **Padrão**: oferece desconto na compra de capacidade de computação por um período de 1 ou 3 anos.
- **Conversível**: Assim como a padrão, oferece desconto na compra de capacidade de computação por um período de 1 ou 3 anos, mas permite a troca por outras instâncias de mesmo ou maior valor durante o período de validade da reserva.

---

**EC2 instances savings plans**: Oferece desconto maior quando as instâncias são da mesma família e região.

**Compute Savings Plans**: Desconto padrão, se aplica ao EC2, Fargate e Lambda.

**Instâncias Spot**: Ideal para cargas de trabalho tolerante a falhas como processamento em lote. Alcança descontos de até 90% e é cobrado por hora ou segundo. O preço varia com base na oferta e demanda de capacidade de computação. As instâncias spot utilizam a capacidade de computação não utilizada da AWS, sendo assim, a carga de trabalho pode ser interrompida se a AWS precisar da capacidade para outros clientes.
    
---

#### Custo total de propriedade

Em uma infraestrutura física local, o custo total de propriedade inclui todos os custos desde hardware e licenciamento de software, até manutenção, suporte e imóveis.

Na Nuvem, o custo total de propriedade é mínimo, você tem como propriedade apenas os recursos que utiliza e os dados que armazena.

#### AWS Organizações

***AWS Organizations*** é um serviço gerenciado gratuito que permite consolidar a gestão de múltiplas contas da AWS em um único local. Sendo possível, criar grupos de contas, aplicar políticas de acesso, e grupos de segurança para grupos chamados de unidades organizacionais e usuários. Com esse serviço, é possível criar uma hierarquia de contas, controlando o acesso aos recursos da nuvem, como por exemplo por cargos e departamentos. 

#### Gestão de custos e faturamento

Através das ferramentas de faturamento da AWS, é possível monitorar e controlar os custos e o uso dos recursos da nuvem.

Dashboards interativos permitem acompanhar de perto os custos da nuvem.

### Visão geral da infraestrutura

A infraestrutura global da AWS é formada por regiões, zonas de disponibilidade e pontos de presença. Atualmente, os serviços da AWS estão presentes em 38 **Regiões geográficas**, abrangendo 120 **Zonas de disponibilidade** e mais de 750 **Pontos de presença**.

Na América do Sul, a AWS está presente com a Região de **São Paulo** possuindo 3 **Zonas de Disponibilidade**.

##### Regiões geográficas ( América do Sul )

- Região de São Paulo (sa-east-1)
    - Zonas de disponibilidade
        - sa-east-1a
        - sa-east-1b
        - sa-east-1c

**Pontos de presença**: Bogotá, Colômbia,Buenos Aires, Argentina,Fortaleza, Brasil,Lima, Peru,Rio de Janeiro, Brasil,São Paulo, Brasil,Santiago, Chile

#### Serviços e categorias de serviços

As principais categorias de serviços da AWS são:

- Computação: EC2, Lambda, Elastic Beanstalk, Lightsail
- Armazenamento: S3, EBS, EFS/FSx, Glacier
- Banco de dados: RDS, DynamoDB, ElastiCache, Redshift, Aurora, Neptune
- Rede e entrega de conteúdo: VPC, CloudFront, Route 53, Direct Connect, API Gateway
- Segurança, identidade e conformidade: IAM, KMS, CloudHSM, GuardDuty, Inspector, Macie
- Gerenciamento e governança: CloudWatch, CloudTrail, Config, Systems Manager, Trusted Advisor
### Segurança

#### Responsabilidade compartilhada

A AWS é responsável pela segurança da nuvem, ou seja, pela proteção da infraestrutura global que suporta os serviços da AWS. Isso inclui hardware, software, redes e instalações que executam os serviços da AWS.

#### Gestão de identidade e acesso

O AWS Identity and Access Management (IAM) é um serviço que permite gerenciar o acesso aos recursos da AWS de forma segura. Com o IAM, é possível criar e gerenciar usuários, grupos e permissões para controlar quem pode acessar os recursos da AWS e o que eles podem fazer com esses recursos. 

# Referências

[Infraestrutura Global da AWS](https://aws.amazon.com/pt/about-aws/global-infrastructure/regions_az/)

[Calculadora de Preços da AWS](https://calculator.aws/#/createCalculator/ec2-enhancement)