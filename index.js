const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

const token =
    "MTI5MzYyMTg0NDY5MTM5MDU4NA.Gxx3Sb.xejc6RJiTJ8Gkms4xL3_TMLNq9xvs5EFqQBTs8"; // Substitua pelo token do seu bot
const channelId = "1291786896401240075"; // Substitua pelo ID do canal onde deseja enviar a mensagem

client.once("ready", () => {
    console.log(`Logado como ${client.user.tag}!`);

    // Atualizar a presença do bot
    client.user.setPresence({
        activities: [
            {
                name: "Krazyz Community!", // Personalize sua mensagem
                type: ActivityType.Watching, // Tipo de atividade
            },
        ],
        status: "online", // Status do bot (online, idle, dnd, etc.)
    });

    // Função para marcar o grupo com o ID de função e enviar a mensagem de aviso
    function pingEveryone() {
        const channel = client.channels.cache.get(channelId);
        if (channel) {
            const mensagem = `
Hora de acordar povo! <@&1291822526346952796>

**__Nota__**: Próximo **Ping Reviver** em 45 minutos!
            `;
            channel.send(mensagem); // Envia a mensagem personalizada
        } else {
            console.log("Canal não encontrado.");
        }
    }

    // Enviar mensagem a cada 45 minutos (2700000 milissegundos)
    setInterval(pingEveryone, 2700000);

    // Opcional: enviar a mensagem quando o bot é inicializado
    pingEveryone();
});

client.login(token);
