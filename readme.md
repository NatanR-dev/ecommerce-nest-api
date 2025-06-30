## 🏗️ Arquitetura Modular e Expandível

                        +-------------------+   +-------------------+   +-------------------+
                        |     Frontend      |   |     Backend       |   |      Mobile       |
                        |      (Soon)       |   |      (API)        |   |      (Soon)       |
                        +-------------------+   +-------------------+   +-------------------+
                                   \                     |                      /
                                    \                    |                     /
                                     \                   |                    /
                                      \                  v                   /
                                          +-------------------------------+
                                          |             Core              |
                                          |      (Regra de Negócio)       |
                                          +-------------------------------+


### 📦 Características

- **🔌 Modularidade**  
  Arquitetura pensada em módulos independentes. Permite adicionar novas interfaces (Web, Mobile, etc.) sem impacto direto na lógica central.

- **♻️ Reutilização com NestJS**  
  O **Core** concentra os serviços, casos de uso e entidades. Esses módulos são reutilizados pela camada de API e futuramente por outras interfaces.

- **🛠️ Facilidade de Manutenção**  
  Alterações nas regras de negócio são feitas no Core, sem afetar diretamente os controladores ou interfaces, desde que a API permaneça estável.

- **📈 Escalabilidade**  
  Cada parte da arquitetura (API, Core, interfaces) pode ser escalada ou testada separadamente. Ideal para crescimento contínuo.

---

### 📐 Por que essa arquitetura?

Esta arquitetura foi pensada para trazer benefícios claros ao desenvolvimento e manutenção do sistema, garantindo flexibilidade e robustez.

- **🔗 Desacople responsabilidades:** separe interfaces, lógica de negócio e comunicação externa para ganhar clareza, testabilidade e controle.

- **⚙️ Ganhe flexibilidade tecnológica:** troque frameworks de frontend, mobile ou bancos de dados sem reescrever o Core.

- **🧪 Facilite testes automatizados:** isole regras de negócio e serviços para que possam ser testados sem depender de API ou UI.

- **📊 Prepare para o crescimento:** escale com confiança. O backend serve como ponte entre as interfaces e o Core, garantindo estabilidade mesmo com novas demandas.
