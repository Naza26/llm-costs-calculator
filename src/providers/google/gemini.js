export const geminiModels = [
    {
        name: "Gemini 2.5 Flash",
        contextWindow: "1M tokens",
        inputPricing: "$0.00015 / 1K tokens",
        outputPricing: "$0.0006 / 1K tokens (no think) / $0.0035 / 1K tokens (with think)",
        inputCost: 0.00015,  // per 1K tokens
        outputCost: 0.0006,  // per 1K tokens (base)
        description: "First hybrid reasoning model in preview with 1M token context window and thought budgets",
    },
    {
        name: "Gemini 2.5 Pro",
        contextWindow: "1M tokens",
        inputPricing: "$0.00125 / 1K tokens (≤200K tokens) / $0.0025 / 1K tokens (>200K tokens)",
        outputPricing: "$0.01 / 1K tokens (≤200K tokens) / $0.015 / 1K tokens (>200K tokens)",
        inputCost: 0.00125,  // per 1K tokens (base tier)
        outputCost: 0.01,    // per 1K tokens (base tier)
        description: "Preview multipurpose state-of-the-art model excelling at programming and complex reasoning",
    },
    {
        name: "Gemini 2.0 Flash",
        contextWindow: "1M tokens",
        inputPricing: "$0.00010 / 1K tokens",
        outputPricing: "$0.00040 / 1K tokens",
        inputCost: 0.00010,  // per 1K tokens
        outputCost: 0.00040, // per 1K tokens
        description: "Balanced multimodal model for various tasks with 1M token context window, built for the agent era",
    },
    {
        name: "Gemini 2.0 Flash-Lite",
        contextWindow: "1M tokens",
        inputPricing: "$0.000075 / 1K tokens",
        outputPricing: "$0.00030 / 1K tokens",
        inputCost: 0.000075, // per 1K tokens
        outputCost: 0.00030, // per 1K tokens
        description: "Small and cost-effective model designed for large-scale usage",
    },
    {
        name: "Gemini 1.5 Flash",
        contextWindow: "1M tokens",
        inputPricing: "$0.000075 / 1K tokens (≤128K tokens) / $0.00015 / 1K tokens (>128K tokens)",
        outputPricing: "$0.00030 / 1K tokens (≤128K tokens) / $0.00060 / 1K tokens (>128K tokens)",
        inputCost: 0.000075, // per 1K tokens (base tier)
        outputCost: 0.00030, // per 1K tokens (base tier)
        description: "Fast multimodal model with strong performance for diverse and repetitive tasks with 1M token context window",
    },
    {
        name: "Gemini 1.5 Flash-8B",
        contextWindow: "1M tokens",
        inputPricing: "$0.0000375 / 1K tokens (≤128K tokens) / $0.000075 / 1K tokens (>128K tokens)",
        outputPricing: "$0.00015 / 1K tokens (≤128K tokens) / $0.00030 / 1K tokens (>128K tokens)",
        inputCost: 0.0000375, // per 1K tokens (base tier)
        outputCost: 0.00015,  // per 1K tokens (base tier)
        description: "Smaller model for less intelligence-intensive use cases with 1M token context window",
    },
    {
        name: "Gemini 1.5 Pro",
        contextWindow: "2M tokens",
        inputPricing: "$0.00125 / 1K tokens (≤128K tokens) / $0.00250 / 1K tokens (>128K tokens)",
        outputPricing: "$0.00500 / 1K tokens (≤128K tokens) / $0.01000 / 1K tokens (>128K tokens)",
        inputCost: 0.00125,  // per 1K tokens (base tier)
        outputCost: 0.00500, // per 1K tokens (base tier)
        description: "Highest-intelligence model in the Gemini 1.5 series with innovative 2M token context window",
    },
];
