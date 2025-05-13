export const openAIModels = [
    {
        name: "GPT-4.1",
        contextWindow: "N/A",
        inputPricing: "USD 2.00 / 1 M tokens",
        outputPricing: "USD 8.00 / 1 M tokens",
        inputCost: 0.002,    // per 1 K tokens
        outputCost: 0.008,   // per 1 K tokens
        description: "El modelo más inteligente para tareas complejas",
    },
    {
        name: "GPT-4.1 mini",
        contextWindow: "N/A",
        inputPricing: "USD 0.40 / 1 M tokens",
        outputPricing: "USD 1.60 / 1 M tokens",
        inputCost: 0.0004,   // per 1 K tokens
        outputCost: 0.0016,  // per 1 K tokens
        description: "Modelo asequible que equilibra velocidad e inteligencia",
    },
    {
        name: "GPT-4.1 nano",
        contextWindow: "N/A",
        inputPricing: "USD 0.10 / 1 M tokens",
        outputPricing: "USD 0.40 / 1 M tokens",
        inputCost: 0.0001,   // per 1 K tokens
        outputCost: 0.0004,  // per 1 K tokens
        description: "El modelo más rápido y rentable para tareas de baja latencia",
    },
    {
        name: "OpenAI o3",
        contextWindow: "N/A",
        inputPricing: "USD 10.00 / 1 M tokens",
        outputPricing: "USD 40.00 / 1 M tokens",
        inputCost: 0.01,     // per 1 K tokens
        outputCost: 0.04,    // per 1 K tokens
        description: "Nuestro modelo con capacidad de razonamiento más poderoso con un destacado rendimiento en programación, matemáticas, ciencia y visión",
    },
    {
        name: "OpenAI o4-mini",
        contextWindow: "N/A",
        inputPricing: "USD 1.10 / 1 M tokens",
        outputPricing: "USD 4.40 / 1 M tokens",
        inputCost: 0.0011,   // per 1 K tokens
        outputCost: 0.0044,  // per 1 K tokens
        description: "Nuestro modelo con capacidad de razonamiento más rápido y rentable con un sólido rendimiento en matemáticas, programación y visión",
    },
    {
        name: "GPT-4o (Realtime Text)",
        contextWindow: "N/A",
        inputPricing: "USD 5.00 / 1 M tokens",
        outputPricing: "USD 20.00 / 1 M tokens",
        inputCost: 0.005,    // per 1 K tokens
        outputCost: 0.02,    // per 1 K tokens
        description: "Modelo de texto de baja latencia vía Realtime API",
    },
    {
        name: "GPT-4o mini (Realtime Text)",
        contextWindow: "N/A",
        inputPricing: "USD 0.60 / 1 M tokens",
        outputPricing: "USD 2.40 / 1 M tokens",
        inputCost: 0.0006,   // per 1 K tokens
        outputCost: 0.0024,  // per 1 K tokens
        description: "Modelo ligero de texto vía Realtime API",
    },
    {
        name: "GPT-image-1",
        contextWindow: "N/A",
        inputPricing: "USD 5.00 / 1 M tokens",
        outputPricing: "USD 10.00 / 1 M tokens",
        inputCost: 0.005,    // per 1 K tokens
        outputCost: 0.01,    // per 1 K tokens
        description: "Generación y edición de imágenes con tokens de imagen",
        isImage: true,
    },
];

export default openAIModels;
