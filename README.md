SafeWakeApp – Checklist de Projeto e Prioridades (Atualizado pós-Testes Vorazes)
1. Infraestrutura & Controle de Código
[x] Criar repositório no GitHub
[x] Subir código com .gitignore (já ignorando .env)
[x] Configurar e verificar o README.md
[x] Gerenciar variáveis sensíveis no .env fora do versionamento
2. Backend (Node, Express, MongoDB)
[x] Servidor Node.js/Express rodando e conectado ao MongoDB Atlas
[x] Rotas RESTful criadas (users, alarms, auth, etc)
[x] Testar rotas com Postman (testado)
[ ] Testar rotas com Insomnia (opcional, pode ser riscado caso não seja prioridade)
[x] Modelos/Schemas organizados
[x] Endpoints de autenticação (login/cadastro) existentes
[x] Endpoints de alarmes implementados
[x] Documentação básica das rotas
[x] Mock implementado para WhatsApp
[ ] Integração real com serviços externos (quando necessário)
Observação:
✔️ Todos os testes reais e manuais (incluindo os "vorazes") em Postman/Hoppscotch foram executados, com sucesso para os casos padrão.
❗Testes de integração externa (ex: WhatsApp real, SMS, notificações push) permanecem em aberto/futuro.

3. Autenticação e Segurança
[x] Middleware de autenticação / Proteção rotas privadas (JWT)
[x] CRUD de usuários funcionando (criar, editar, buscar, apagar)
4. Integração & Funcionalidades Especiais
[x] Integração do frontend com backend (login/cadastro/alarme testados)
[ ] Timer/disparo de alarme funcionando no app (simulação: ✗ real: ✗ – precisa validar com build no app)
[x] Mock de envio WhatsApp funcional
[ ] Integração real do WhatsApp Business ou SMS Push (para futuro)
5. Frontend (React Native/Expo)
[ ] Telas de cadastro/login conectadas à API (em progresso ou pendente)
[ ] Contexto de autenticação no front (Context API ou Redux)
[ ] Navegação implementada (Stack/Tab/etc)
[ ] Assets (logo, ícones) organizados
[ ] Testar fluxo completo: login → acionar timer → abrir WhatsApp/SMS
Observação:
👉 Para avançar nos testes reais (“do back pro front”), agora é necessário:

Garantir que as telas estão conectadas à API real;
Validar navegação, contexto e experiência do usuário;
Simular timers e disparos de alarme efetivamente em dispositivo.
6. Extras e Fase de Publicação
[ ] Build do APK/teste em dispositivo real
Sugestão: Próxima etapa lógica APÓS garantir fluxo no emulador/web.
⬆️ Preparar comando do Expo:
- No terminal: expo build:android (ou eas build -p android com novo Expo) - Instalar APK em smartphone e validar timers, notificações, disparo de WhatsApp, desempenho geral.
[ ] Publicação na loja (Google Play/App Store) – opcional/produto final
[ ] Push notifications (opcional/feature futura)
[ ] Checklist de feedback dos usuários/ajustes
Instrução – Ação Recomendada Agora
Etapa sugerida após testes reais do backend:

Se deseja continuar os testes avançando para o front:
Iniciar os testes no app (emulador ou dispositivo).
Validar as telas, navegação e chamadas reais para a API já aprovada nos testes do Postman/Hoppscotch.
Se o timer/disparo precisa ser validado em ambiente real:
Preparar build do APK usando Expo/React Native.
Instalar no smartphone Android real.
Testar login, criação de alarme, disparo de timer, verificação do acionamento real do WhatsApp/SMS.
Próximos comandos (se deseja subir e testar no Android):

Certifique-se de estar com o app rodando local (npm start ou expo start).
Para abrir no celular real via QR Code (Expo):
Com o projeto rodando, leia o QR Code pelo app Expo Go no seu celular.
O app abrirá e você pode testar o fluxo real.
Para gerar APK de teste (React Native puro ou EAS Build):
eas build -p android (novo Expo)
Baixe o APK, instale no aparelho e simule os fluxos (login, timer, disparo de WhatsApp).
Checklist do próximo ciclo

[ ] App comunica corretamente com o backend em ambiente real (Wi-fi ou produção)
[ ] Timer funciona e dispara ação no horário correto no app Android
[ ] Acionamento “abrir WhatsApp” realmente funciona no aparelho
[ ] Erros e ajustes identificados para feedback
Resumo
Você fechou a fase de testes reais do backend.
Agora, o foco natural é “subir” (rodar/buildar) o APP, testar em ambiente Android real e buscar possíveis erros ou melhorias, além de garantir que toda a jornada (login, alarme, disparo do WhatsApp) está fluindo para o usuário final.

Se quiser, posso montar um roteiro passo-a-passo para o build e teste no Android real (com cada comando e ajuste), ou detalhar os requisitos para avançar na parte do app (frontend)!
