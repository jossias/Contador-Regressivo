# Contador-Regressivo
Um contador regressivo simples e personalizável criado com HTML, CSS e JavaScript. Este projeto permite que você crie contadores regressivos para diversos eventos e aprenda como trabalhar com funções de tempo em JavaScript.

![Contador Regressivo]
![Screenshot from 2023-10-25 15-15-44](https://github.com/jossias/Contador-Regressivo/assets/22170684/e1ac6691-f90d-40fd-8cbf-7d27f3193a79)

## Recursos

- Defina uma data e hora-alvo para o seu contador regressivo.
- O contador exibe dias, horas, minutos e segundos.
- Personalize a aparência usando CSS.
- Atualização automática a cada segundo.

## Uso

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-nome/contador-regressivo.git
    ```

2. Abra o arquivo `index.html` em seu navegador da web para visualizar o contador regressivo.

3. Personalize a data e hora-alvo no arquivo `script.js` para definir o seu contador regressivo desejado.

4. Modifique o CSS no arquivo `styles.css` para alterar a aparência do contador.

## Exemplo

No código fornecido, a data e hora-alvo estão definidas para 31 de dezembro de 2023, à meia-noite. Você pode alterar essa data, modificando a seguinte linha no arquivo `script.js`:

```javascript
const targetDate = new Date("2023-12-31 00:00:00").getTime();
