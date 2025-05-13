export const geminiModels = [
    {
        name: "Gemini 1.5 Pro",
        contextWindow: "2M tokens",
        inputPricing: "$0.0005 / 1K tokens",
        outputPricing: "$0.0015 / 1K tokens",
        inputCost: 0.0005,  // per 1K tokens
        outputCost: 0.0015, // per 1K tokens
        description: "Most capable model for highly complex tasks",
    },
    {
        name: "Gemini 1.5 Flash",
        contextWindow: "1M tokens",
        inputPricing: "$0.00003 / 1K tokens",
        outputPricing: "$0.00009 / 1K tokens",
        inputCost: 0.00003, // per 1K tokens
        outputCost: 0.00009, // per 1K tokens
        description: "Fast and cost-effective model for simpler tasks",
    },
    {
        name: "Gemini 1.0 Pro",
        contextWindow: "32K tokens",
        inputPricing: "$0.000125 / 1K tokens",
        outputPricing: "$0.000375 / 1K tokens",
        inputCost: 0.000125, // per 1K tokens
        outputCost: 0.000375, // per 1K tokens
        description: "High-quality model for various tasks",
    },
    {
        name: "Gemini 1.0 Pro Vision",
        contextWindow: "32K tokens",
        inputPricing: "$0.0001875 / 1K tokens",
        outputPricing: "$0.000375 / 1K tokens",
        inputCost: 0.0001875, // per 1K tokens
        outputCost: 0.000375, // per 1K tokens
        description: "Multimodal model that can process text and images",
    },
];
