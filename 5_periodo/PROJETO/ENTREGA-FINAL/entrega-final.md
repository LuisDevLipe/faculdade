Para os alunos que não terminaram o curso da AWS, será obrigatório o cumprimento das seguintes entregas:

1. Relatório Técnico

    Deverá ser postado no AVA (Ambiente Virtual de Aprendizagem) no link da Entrega Final.
    O documento deve detalhar o progresso realizado, os módulos concluídos e as justificativas técnicas/atividades desenvolvidas.

2. Apresentação (Slides)

    O arquivo da apresentação (PPT/PDF) também deverá ser postado impreterivelmente no AVA no link Apresentação do Projeto.

3. Defesa / Apresentação Presencial

    Data: 26/06/2026 (Sexta-feira)
    Todos os alunos pendentes deverão apresentar o seu trabalho nesta data.


# Relatório Técnico
Data limite
    - Entrega 14/06/26
    - Apresentação 26/06/26


Objetivo do relatório
Definir a Nuvem AWS;
• Explicar a filosofia de definição de preço da AWS;
• Identificar os componentes de infraestrutura global da AWS; Criar uma AWS Virtual Private Cloud
(Amazon VPC);
• Demonstrar quando usar os serviços de banco de dados da AWS;
• Explorar os principais conceitos relacionados ao Elastic Load Balancing (ELB), Amazon CloudWatch
e Auto Scaling.
• Descrever as medidas de segurança e conformidade da Nuvem AWS, incluindo o AWS Identity and
Access Management (IAM);
• Explicar os princípios básicos da arquitetura da Nuvem AWS


Assuntos técnicos abordados

Módulo 1:
    - Seção 1: Introdução à computação em nuvem
    - Seção 2: Vantagens da computação em nuvem
    - Seção 4: Mudança para Nuvem AWS - AWS CAF

Módulo 2:
    - Seção 1: Fundamentos da definição de preço
    - Seção 2: Custo total de propriedade
    - Seção 3: AWS Organizations
    - Seção 4: AWS Faturamento e Gestão de Custo
    - Seção 5: Suporte Técnico

Módulo 3:
    - Seção 1: Infraestrutura Global da AWS
    - Seção 2: Visão geral dos serviços e categorias

Módulo 4:
    - Seção 1: Modelo de Responsabilidade Compartilhado
    - Seção 2: AWS Identity and Access Management (IAM)
    - Seção 3: Proteção de Uma Nova Conta
    - Seção 5: Proteção de dados na AWS
    - Seção 6: Conformidade
    - Seção 4: Proteção de contas

Módulo 5:
    - Seção 1: Noções Básicas de Redes
    - Seção 2: Amazon VPC
    - Seção 3: Redes VPC
    - Seção 4: Segurança da VPC
    - Seção 5: Amazon Route 53
    - Seção 6: Amazon CloudFront

Módulo 6:
    - Seção 1: Visão Geral dos Serviços de Computação
    - Seção 2,3,4: Amazon EC2
    - Seção 5: Otimização de Custos do Amazon EC2
    - Seção 6: Serviços de Contêiner
    - Seção 7: AWS Lambda
    - Seção 8: AWS Elastic Beanstalk
    
Módulo 7:
    - Seção 1: Elastic Block Store
    - Seção 2: Simple Storage Service
    - Seção 3: Elastic File System
    - Seção 4: S3 Glacier

Módulo 8:
    - Seção 1: Amazon RDS
    - Seção 2: Amazon DynamoDB
    - Seção 3: Amazon Redshift
    - Seção 5: Amazon Aurora

Módulo 9:
    - Seção 1: AWS Well-Architected Framework
    - Seção 2: Confiabilidade e Alta Disponibilidade
    - Seção 3: Seguraça
    - Seção 4: Confiabilidade
    - Seção 5: Eficiência de performance
    - Seção 6: Otimização de Custos
    - Seção 7: -------------
    - Seção 8: AWS Trusted Advisor

Módulo 10:
    - Seção 1: Elastic Load Balancing
    - Seção 2: Amazon CloudWatch
    - Seção 3: Amazon EC2 Auto Scaling

Começando a partir do módulo 5, pois os módulos anteriores estarão cobertos pela entrea prelimnar

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

#### Nuvem Privada Virtual (VPC - Virtual Private Cloud)

Asim como em outros provedores de nuvem, na AWS vocẽ cria as suas nuvens dentro de VPCs. As VPCs centralizam configurações de de acesso como NAT Gateways, ACLs de rede e tabelas de rota. Os recursos de computação como o Amazon EC2 quando instânciados, são alocados sempre dentro de uma VPC.

A segurança da VPC é feita com as ferramentas de rede menciondas, bem como com controle de acesso dos usuários através do IAM.

Outros serviços importantes que trabalham em conjunto com as VPCs são o Amazon Route 53 e Amazon Cloudfront

Com o Amazon Route 53, você registra domínios e gerencia servidores DNS para que seus serviços dentro ou fora da AWS possam ser alcançados pelo usuário final através de nome de domínio como **"www.google.com"** que facilita a utilização e descoberta da aplicação.

Com o CloudFront, você gerencia uma rede de entrega de conteúdo, que fará caching de requisições de ativos como imagens, páginas, arquivos que seus usuários acessa com frequência, o que diminui a carga nos servidores de aplicação, assim como a latência para o usuário final.

#### Computação (EC2, Lambda, ECS/EKS, Elastic Beanstalk e Fargate)

Na AWS existem diversos serviços de computação. Os dois mais conhecidos são o Amazon Elastic Compute Cloud (EC2) e AWS Lambda.

Os serviços de computação, estarão dividos em duas categorias: os que usuário escolhe manualmente os recursos de hardware e os que a própria aws gerencia (serverless).

*Serverless*: são serviços **"sem servidor"** o Lambda, Fargate, Beanstalk.

O Lambda é um serviço de computação onde você armazena um pedaço de código na AWS chamado de função e emite um evento para o serviço solicitando a execução da função lambda. As funções lambda podem ser invocadas múltiplas vezes, simultaneamente e em paralelo. Portanto, a escalabilidade horizontal está garantida. A escalabilidade vertical é garantida da seguinte maneira: nas funções lambda, por se tratar de um serviço gerenciado pela AWS e serverless, os recursos de harware são **"infinitos"** você apenas define o que deve ser executado e a AWS gerencia o hardware necessário, sem overhead.

A precificação do serviço é de acordo com a quantidade de requisições, ou seja quantas vezes a função é executada.

Além do Lambda, existem outros serviços como o Beanstalk e Fargate.

Estes dois serviços são bem parecidos com o EC2 e ECS/EKS.

No Beanstalk você define as aplicações que deseja executar e AWS gerencia as instâncias necessárias.

No Fargate você define as imagens de contêineres e a AWS cuidará da execução.

EC2, ECS/EKS são serviços de computação onde o usuário configura os recursos de hardware.

O EC2 é como uma máquina virtual na nuvem, você escolhe o hardware: vCPUS, RAM, armazenamento (EBS e/ou NFS), capacidade de rede (largura de banda) e sistema operacional. Através da instância é possível executar as suas cargas de trabalho.

O ECS é um serviço orientado a contêineres da AWS, onde é possível lançar contêineres dentro de instâncias EC2. O EKS é a versão Kubernetes do ECS.

> É uma forma nativa da nuvem, dentro do ecossistema da AWS, de gerenciar aglomerados (clusters) de servidores especialmente útil para cargas de trabalho stateless como microsserviços.

A diferença principal entre ECS/EKS e Fargate é que o primeiro o usuário gerencia recursos de hardware, enquanto o segundo a AWS fica com a responsável, a precificação do produto gerenciado também é diferente.

> Algo que é importante levar em consideração quando estamos trabalhando com serviços da AWS que fazem uso de instâncias EC2 é a otimização de custos: Existem diferentes tipos de contrato de compra de instâncias EC2, desde instâncias reservadas com pagamento adiantado, instâncias com pagamento sob demanda, e instâncias "emprestadas" de outros usuários que estão paradas.

#### Armazenamento

A AWS fornece 3 tipos principais de armazenamento:

###### Sistema de arquivos

EFS e FSx: são serviços de NFS (Network File System - Sistema de Arquivo em Rede) permite que outros computadores acessem um sistema de ficheiros POSIX nativo (Linux) como se fosse um disco de armazenamento local. Ideal para conectar em servidores que leitura e escrita de arquivos de configuração e logs.

> o FSx é uma versão do EFS que utiliza o protocolo SMB e NFS(Lustre, ZFS) que são protocolos compatíveis com sistema operacional Windows, Lustre e OpenZFS.


###### Em bloco

EBS: Elastic Block Store ou Armazenamento Elástico em Blocos é um serviço da AWS para montagem de dispositivos de armazenamento em instâncias EC2, ele permite que a instância seja capaz de ler e escrever arquivos em disco nas instâncias EC2. É mais barato e mais simples que o NFS, seu propósito é simples, persistir os dados das instâncias.

###### De objetos

S3: O Simple Storage Service, um dos primeiros serviços da AWS é um serviço de armazenamento de objetos, análogo a serviços que conhecemos como Google Drive, OneDrive... Porém é extremamente performático, feito para suportar cargas de trabalho de servidores. Possui diversas formas de se interagir: console da AWS, interface de linha de comando, interface de programação de aplicações e SDKs. Os arquivos são armazenamentos em buckets em uma região da AWS. Escalabilidade vertical e horizontal automática, alcance global, replicação automática, criptografados em descanso e em trânsito. Você não paga pelo espaço ocupado na nuvem, você paga pelo tráfego de entrada e saída do Bucket. Existem ainda classes de armazenamento dentro do serviço que permitem que seus arquivos que serão acessados com menos frequência sejam armazenados em classes de menor custo.


#### Bancos de dados

- **Amazon RDS (Relational Database Service):** Serviço gerenciado para bancos de dados relacionais que facilita a configuração, operação e escalabilidade. Suporta motores como MySQL, PostgreSQL, e SQL Server.
- **Amazon DynamoDB:** Banco de dados NoSQL totalmente gerenciado, que oferece desempenho rápido e escalabilidade contínua. É um banco de dados de chave-valor e de documentos.
- **Amazon Redshift:** Um data warehouse em escala de petabytes, totalmente gerenciado na nuvem. É otimizado para análise de grandes conjuntos de dados.
- **Amazon Aurora:** Banco de dados relacional compatível com MySQL e PostgreSQL, desenvolvido para a nuvem, que combina o desempenho de bancos de dados comerciais com a simplicidade e o custo-benefício de bancos de dados de código aberto.