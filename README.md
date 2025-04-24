SafeWakeApp – Checklist de Projeto e Prioridades

1. Infraestrutura & Controle de Código
[x] Criar repositório no GitHub
[x] Subir código com .gitignore (já ignorando .env)
[x] Configurar e verificar o README.md
[x] Gerenciar variáveis sensíveis no .env fora do versionamento
2. Backend (Node, Express, MongoDB)
[x] Servidor Node.js/Express rodando e conectado ao MongoDB Atlas
[x] Rotas RESTful criadas (users, alarms, auth, etc)
[x] Testar rotas com Postman (testado)
[ ] Testar rotas com Insomnia (opcional)
[x] Modelos/Schemas organizados
[x] Endpoints de autenticação (login/cadastro) existentes
[x] Endpoints de alarmes implementados
[x] Documentação básica das rotas
[x] Mock implementado para WhatsApp
[ ] Integração real com serviços externos (quando necessário)
3. Autenticação e Segurança
[x] Middleware de autenticação/mecanismo de proteção das rotas privadas
[x] CRUD de usuários funcionando
4. Integração & Funcionalidades Especiais
[ ] Integração do frontend com o backend (login/cadastro/alarme)
[ ] Timer/disparo de alarme funcionando no app (simulação e real, conforme necessidade)
[x] Mock de envio WhatsApp funcional
[ ] Integração real do WhatsApp Business ou SMS Push (futuro/necessidade)
5. Frontend (React Native/Expo)
[ ] Telas de cadastro/login conectadas à API
[ ] Contexto de autenticação no front (Context API ou Redux)
[ ] Navegação implementada (Stack/Tab/etc)
[ ] Assets (logo, ícones) bem organizados
[ ] Testar fluxo completo: login → acionar timer → abrir WhatsApp/SMS
6. Extras e Fase de Publicação
[ ] Build do APK/teste em dispositivo real
[ ] Publicação na loja (Google Play/App Store) – opcional/produto final
[ ] Push notifications (opcional/feature futura)
[ ] Checklist de feedback dos usuários/ajustes
