export const anthropicModels = [
    {
        name: "Claude 3.7 Sonnet",
        contextWindow: "200K tokens",
        inputPricing: "$3 / M tokens",
        outputPricing: "$15 / M tokens",
        inputCost: 0.003,   // per 1K tokens
        outputCost: 0.015,  // per 1K tokens
        description: "Most intelligent model, with visible step-by-step reasoning",
    },
    {
        name: "Claude 3.5 Haiku",
        contextWindow: "200K tokens",
        inputPricing: "$0.80 / M tokens",
        outputPricing: "$4 / M tokens",
        inputCost: 0.0008,  // per 1K tokens
        outputCost: 0.004,  // per 1K tokens
        description: "Fastest, most cost-effective model",
    },
    {
        name: "Claude 3 Opus",
        contextWindow: "200K tokens",
        inputPricing: "$15 / M tokens",
        outputPricing: "$75 / M tokens",
        inputCost: 0.015,   // per 1K tokens
        outputCost: 0.075,  // per 1K tokens
        description: "Powerful model for complex tasks",
    },
];
