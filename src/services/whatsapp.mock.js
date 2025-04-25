// services/whatsapp.js (VERSÃO MOCKADA)
export async function sendWhatsApp(to, message) {
  // Simula um envio (não faz chamada real!)
  console.log(`[MOCK] Enviando WhatsApp para ${to}: ${message}`);
  return {
    sid: 'MOCKED_SID_1234567890',
    to,
    message,
    date: new Date(),
    info: 'Esta mensagem é apenas uma simulação, nada foi enviado de verdade.'
  };
}
