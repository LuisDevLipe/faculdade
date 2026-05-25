Avaliação Formadora II - 5º Semestre - Análise e Desenvolvimento de Sistemas \
Alunos: Luis Felipe Macedo dos Santos \
Turma: ADS0501N - Bonsucesso
# Nuvem Comunitária

Com o objetivo de compartilhar os recursos da empresa, será desenvolvido um ambiente em nuvem compartilhado, onde os colaboradores poderão encontrar e compartilhar dados da empresa, documentos e aplicações.


# Infraestrutura
A nuvem será composta por servidores de armazenamento, servidores de aplicação e servidores de banco de dados.
Como não sabemos se a empresa possui um datacenter próprio, a infraestrutura será alocada em um provedor de nuvem pública.

Serão utilizados serviços de computação em nuvem, como máquinas virtuais, para as aplicações. Para os servidores de armazenamento, assim como para os servidores de banco de dados, serão utilizados serviços gerenciados da nuvem, pois garantem nativamente escalabilidade avançada e alta disponibilidade. 

Além disso, serão utilizados serviços de rede como VPN para garantir a segurança ao acessar os dados privados da empresa. Serviços de firewall de aplicação e balanceadores de carga também serão utilizados.

Para o acesso dos colabores as aplicações, serão utilizados serviços de autenticação e autorização, como o LDAP. Além de serviços de registro de domínios para criação dos endereços DNS e endereços de e-mail.

Possívelmente, serão utilizados serviços de monitoramento e gerenciamento de nuvem para garantir a saúde e o desempenho do ambiente em nuvem compartilhado.

A depender da escolha do provedor de nuvem, poderão ser utilizados serviços gerenciados ou serviços hospedados em máquinas virtuais como: Prometheus, Grafana, Logstash, Kibana, entre outros.

Produtos externos ao provedor poderão ser utilizados para facilitar a configuração da infraestrutura na nuvem como o Terraform e Ansible.

# Serviços
## Servidores de Armazenamento

Será criado uma Nuvem Privada Virtual onde serão executados servidores hospedando aplicações diferentes, como por exemplo, um servidor de arquivos.

No servidor de arquivos, será instalado o NextCloud, que é uma plataforma de armazenamento em nuvem de código aberto. Através do software é possível configurar como backend de armazenamento serviços de armazenamento em nuvem como o Amazon S3 [Veja: Storage Configuration - NextCloud Docs](https://docs.nextcloud.com/server/stable/admin_manual/configuration_files/external_storage_configuration_gui.html#storage-configuration).

## Acesso

Os colaboradores poderão acessar a nuvem através de um portal web (intranet), utilizando as credenciais da empresa.

Será registrado um domínio para a empresa, e o serviços estarão disponíveis através de subdomínios, como por exemplo: `drive.empresa.com.br` para o servidor de arquivos NextCloud.


Cada colaborador terá seu acesso controlado por meio de permissões, suas credencias serão gerenciadas por um sistema LDAP, cada usuário terá uma credencial seguindo o domínio da empresa, por exemplo: `luis-felipe.macedo@empresa.com.br`.

## Aplicações

Serão disponibilizadas aplicações para os colaboradores, como sistemas internos de gestão, e uma intranet para comunicação interna e compartilhamento de informações. Na intranet, estará centralizado o acesso as demais aplicações e serviços interno.

## Bancos de dados

Para as aplicações internas, serão utilizados bancos de dados em nuvem, a depender do tipo de aplicação, poderão ser utilizados bancos de dados relacionais, chave-valor, documentos ou outros.

# Configuração

O objetivo da nuvem comunitária é fornecer um ambiente compartilhado para os colaboradores.

Para alcançar esse objetivo, será necessário estudar diferentes provedores de nuvem, avaliar os serviços oferecidos e os modelos de precificação.

Será necessário adquirir métricas de uso e desempenho esperado para dimensionar a infra de acordo antes de comprometer-se com um provedor de nuvem.

Não somente, haverá a necessidade de se limitar a apenas um provedor, poderão ser utilizados serviços de diferentes provedores em diferentes serviços.