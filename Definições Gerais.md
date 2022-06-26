
  

# Projeto de implementação ferramenta para simulação

### Identificação dos autores: Bárbara Pegoraro e Eduardo Tonatto


#### Modalidade de projeto escolhida: Implementação ferramenta

---

**Definição do formato do arquivo de configuração de entrada**

* **E**i-**C**i
  * Significa que a *Entrada i* direciona a entidade temporária para o *Componente i*
* **C**i;1;3-7;**C**i+1
  * Siginifica que o *Componente i* possui *1* centro de servico com tempos de atendimentos a entidades temporarias que variam de *3 a 7* unidades de tempo, e ao final da execucao direciona para o *Componente i+1*
  * Da mesma forma que componentes *podem direcionar para* outros *componentes*, eles também podem direcionar para um *roteamento* ou *saída*
* **C**i;N;1:S1-E1,...,N:SN-EN;**C**i+1
  * Componentes podem possuir mais de um centro de servico, ao definir o *Componente 1* informamos que ele possui *N* centro de servico, sendo que a primeira possui o tempo de atendimento *S1 ate E1* e separando por virgula informa-se os tempos dos demais centros, finalizando com o ultimo centro de servico *N* com o tempo de atendimento *SN ate EN*, e ao final da execucao direciona para o *Componente i+1*
  * Da mesma forma que componentes *podem direcionar para* outros *componentes*, eles tambem podem direcionar para um *roteamento* ou *saida*
* **R**i;0.3-**C**i;0.7-**S**i
  * Significa que o componente de *Roteamento i* tem 30% (0.3) de chance de encaminhar a entidade para o *Componente i* e outros 70% (0.7) de encaminhar para a *Saida i*
  * Da mesma forma que roteadores *podem direcionar para saidas*, eles também podem direcionar para um *outro roteador* ou *componente*

Símbolo   | Significado
--------- | ------
E | Entrada
C | Componente (Centro de serviço)
R | Roteador (Estrutura de decisão)
S | Saida
i | Índice do componente

---

**Definição do formato do arquivo de saida**

* O_Ci:X
  * *Ociosidade* de *X* unidades de tempo para o *Componente i*
* TME_ETCi:X
  * *Tempo Médio de Espera* de *X* unidades de tempo das *Entidades Temporarias* no *Componente i*
* TMA_ETCi:X
  * *Tempo Médio de Atendimento* de *X* unidades de tempo das *Entidades Temporarias* no *Componente i*
* TMP_ET:X
  * *Tempo Médio de Permanência* de *X* unidades de tempo das *Entidades Temporarias* no modelo em geral.

Símbolo   | Significado
--------- | ------
O | Ociosidade
TME | Tempo Médio de Espera
TMA | Tempo Médio de Atendimento
TMP | Tempo Médio de Permanência
ET | Entidades Temporarias
C | Componente

---

**Diagrama de contexto, ou recurso similar, indicando os módulos principais**

---

**Linguagem de programação**

* Typescript

---

**Hipótese de estrutura de dados para controlar ocorrência de eventos**

---
