const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(
    express.static(
        path.join(__dirname)
    )
);

let GoogleGenAI;

async function iniciarGemini() {
    const modulo =
        await import("@google/genai");

    GoogleGenAI =
        modulo.GoogleGenAI;
}

app.post("/api/chat", async (req, res) => {
  
  console.log("CHEGOU UMA MENSAGEM:", req.body)

    try {

        const mensagem =
            req.body.mensagem;

        if (!mensagem) {

            return res.status(400).json({
                erro: "Mensagem não informada."
            });

        }

        if (!GoogleGenAI) {
            await iniciarGemini();
        }

        const ai =
            new GoogleGenAI({
                apiKey:
                    process.env.GEMINI_API_KEY
            });

        const resposta =
            await ai.interactions.create({

                model: "gemini-3.6-flash",

                system_instruction: `
Você é a Assistente Moonlit da Moonlit Store.

Você ajuda os clientes da Moonlit Store.

Produtos:

- Combo Basic: R$ 20,00
- Combo Verão: R$ 30,00
- Combo Inverno: R$ 114,00
- Combo Outono: R$ 5,25
- Combo Primavera: R$ 30,00
- Combo De 125 Sets: R$ 20,00
- X-all completo: R$ 150,00
- X-all lendário: R$ 140,00
- X-all sazonal: R$ 30,00

Instagram:
@moonlit_.store

TikTok:
@moonlit_.store

WhatsApp:
(86) 8855-9115

Regras:

- Responda sempre em português brasileiro.
- Seja educada, simpática, clara e objetiva.
- Você representa a Moonlit Store.
- Nunca invente produtos.
- Nunca invente preços.
- Nunca invente formas de pagamento.
- Nunca invente informações de entrega.
- Nunca invente informações de trocas ou reembolsos.
- Se não souber alguma informação, diga claramente que não possui essa informação.
`,

                input: mensagem

            });

        console.log(
            "Resposta recebida do Gemini."
        );

        res.json({

            resposta:
                resposta.output_text ||
                "Não consegui gerar uma resposta."

        });

    } catch (erro) {

        console.error(
            "ERRO COMPLETO DO GEMINI:",
            erro
        );

        if (
            erro.status === 429 ||
            erro.statusCode === 429
        ) {

            return res.status(429).json({

                erro:
                    "Estou recebendo muitas mensagens agora. Tente novamente em alguns segundos."

            });

        }

        res.status(500).json({

            erro:
                "Erro ao falar com o Gemini."

        });

    }

});

app.listen(
    PORT,
    () => {

        console.log(
            `Moonlit Store rodando em http://localhost:${PORT}`
        );

    }
);