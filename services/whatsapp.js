// services/whatsapp.js

// Função simulada de envio de WhatsApp (mock/teste)
async function sendWhatsApp(to, message) {
  console.log(`Simulando envio de WhatsApp para ${to}: ${message}`);
  // Retorna um objeto simbólico para o teste
  return { success: true, to, message };
}

// Exporta como objeto para uso via WhatsApp.sendWhatsApp(...)
export default { sendWhatsApp };
