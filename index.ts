import logger from "./src/utils/logger"
import {app} from "./src/app"

const PORT = process.env.API_PORT || 3000

async function initServer() {
    try {
        app.listen(PORT, (): void => {
            logger.info(`Connected successfully on port ${PORT}`);
        });
    } catch (error) {
        logger.error(`Error occurred while starting server: ${JSON.stringify(error)}`);
    }
}


// Initialization
initServer()

// export for testing
export {app}

