# Vicky Salud 🩺

Plataforma web clínica diseñada para ofrecer una experiencia rápida, limpia y completamente responsiva a los pacientes, optimizada tanto en su interfaz como en su infraestructura de producción.

## 💡 ¿De qué trata el proyecto?
Desarrollé este sistema con el objetivo de simplificar el acceso a los servicios de salud y estructurar de forma clara un portal clínico funcional (incluyendo la lógica para el agendamiento de citas). Me enfoqué en que la experiencia de usuario fuera impecable y que el sitio cargara sin fricciones desde cualquier dispositivo.

## 🛠️ Stack Tecnológico
- **Frontend / Lógica:** TypeScript, Vite, React.
- **Infraestructura & Despliegue:** Netlify, gestión de dominios y registros DNS en NIC Chile.
- **Seguridad:** Certificados SSL/TLS (HTTPS) y validación de dominios para componentes externos.
- **Control de Versiones:** Git & GitHub.

---

## 🚀 Desafíos Técnicos y Cómo los Resolví (DevOps)

Más allá de escribir código para la interfaz, me encargé de levantar todo el proyecto desde cero en internet y llevarlo a un entorno de producción real, resolviendo problemas complejos en el camino:

1. **Dominio y Redes:** Configuré y registré el dominio `.cl` directamente en NIC Chile, gestionando la delegación de los servidores de nombres (*nameservers*) hacia Netlify para asegurar que el sitio resolviera correctamente a nivel global.
2. **Automatización (CI/CD):** Conecté el repositorio de GitHub con Netlify para automatizar los despliegues de forma que cada mejora se suba de inmediato a producción sin intervenciones manuales.
3. **Depuración de Compilación:** Tuve que lidiar con errores típicos de despliegue en consola (como el temido *Exit code: 2*). Para solucionarlo, ajusté los comandos de compilación con `bun run build` y reorganicé la estructura de carpetas raíz de distribución.
4. **Optimización de Assets:** Arreglé los clásicos dolores de cabeza con las rutas de las imágenes y los favicons (errores 404), migrando los recursos a un directorio público estático (`public`) con rutas absolutas bien definidas.
5. **Seguridad Web:** Dejé la plataforma protegida bajo cifrado SSL/TLS (HTTPS), asegurando que la transmisión de datos y la integración de iframes de terceros cumplan con los estándares de seguridad necesarios.
