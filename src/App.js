import {useState, useEffect} from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip
} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import basicTheme from "./theme";
import {geminiModels} from "./providers/google/gemini";


export default function LLMCostCalculator() {
  const [selectedModel, setSelectedModel] = useState(geminiModels[0]);
  const [inputTokens, setInputTokens] = useState(1000);
  const [outputTokens, setOutputTokens] = useState(1000);
  const [totalCost, setTotalCost] = useState(0);
  const [requestsPerMonth, setRequestsPerMonth] = useState(100);

  // Calculate cost whenever inputs change
  useEffect(() => {
    const inputCost = (inputTokens / 1000) * selectedModel.inputCost;
    const outputCost = (outputTokens / 1000) * selectedModel.outputCost;
    const costPerRequest = inputCost + outputCost;
    const monthlyTotal = costPerRequest * requestsPerMonth;
    setTotalCost(monthlyTotal);
  }, [selectedModel, inputTokens, outputTokens, requestsPerMonth]);

  return (
      <ThemeProvider theme={basicTheme}>
        <Container maxWidth="lg" sx={{py: 4}}>
          <Paper elevation={3} sx={{p: 3, borderRadius: 2}}>
            <Typography variant="h4" component="h1" align="center" gutterBottom color="primary">
              LLM Cost Calculator
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom color="primary.dark" sx={{mb: 3}}>
              Gemini Models
            </Typography>

            {/* Model Selection */}
            <Box sx={{mb: 4}}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="model-select-label">Select Model</InputLabel>
                <Select
                    labelId="model-select-label"
                    value={selectedModel.name}
                    label="Select Model"
                    onChange={(e) => {
                      const model = geminiModels.find(m => m.name === e.target.value);
                      setSelectedModel(model);
                    }}
                    variant="outlined">
                  {geminiModels.map((model) => (
                      <MenuItem key={model.name} value={model.name}>
                        {model.name}
                      </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography variant="body2" color="text.secondary" sx={{mt: 1}}>
                {selectedModel.description}
              </Typography>
            </Box>

            {/* Model Info Card */}
            <Card variant="outlined" sx={{mb: 4}}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary.dark">
                  {selectedModel.name} Details
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" color="text.secondary">Context Window</Typography>
                    <Typography variant="body1"
                                fontWeight="medium">{selectedModel.contextWindow}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" color="text.secondary">Input Price</Typography>
                    <Typography variant="body1"
                                fontWeight="medium">{selectedModel.inputPricing}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" color="text.secondary">Output Price</Typography>
                    <Typography variant="body1"
                                fontWeight="medium">{selectedModel.outputPricing}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Token Input Fields */}
            <Grid container spacing={3} sx={{mb: 4}}>
              <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    label="Input Tokens per Request"
                    type="number"
                    variant="outlined"
                    InputProps={{inputProps: {min: 1}}}
                    value={inputTokens}
                    onChange={(e) => setInputTokens(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    label="Output Tokens per Request"
                    type="number"
                    variant="outlined"
                    InputProps={{inputProps: {min: 1}}}
                    value={outputTokens}
                    onChange={(e) => setOutputTokens(Number(e.target.value))}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    label="Requests per Month"
                    type="number"
                    variant="outlined"
                    InputProps={{inputProps: {min: 1}}}
                    value={requestsPerMonth}
                    onChange={(e) => setRequestsPerMonth(Number(e.target.value))}
                />
              </Grid>
            </Grid>

            {/* Cost Display */}
            <Card sx={{mb: 4, bgcolor: 'primary.light', color: 'white'}}>
              <CardContent>
                <Typography variant="h6" gutterBottom>Cost Calculation</Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">Cost per
                      Request</Typography>
                    <Typography variant="body1" fontWeight="medium">
                      ${((inputTokens / 1000) * selectedModel.inputCost +
                        (outputTokens / 1000) * selectedModel.outputCost).toFixed(6)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">Monthly Cost
                      (Estimated)</Typography>
                    <Typography variant="h5" fontWeight="bold">${totalCost.toFixed(2)}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* All Models Price Comparison */}
            <Typography variant="h6" gutterBottom color="primary.dark" sx={{mt: 6, mb: 2}}>
              Gemini Models Price Comparison
            </Typography>
            <TableContainer component={Paper} variant="outlined">
              <Table aria-label="model comparison table">
                <TableHead>
                  <TableRow sx={{bgcolor: 'primary.light'}}>
                    <TableCell sx={{color: 'white', fontWeight: 'bold'}}>Model</TableCell>
                    <TableCell sx={{color: 'white', fontWeight: 'bold'}}>Context Window</TableCell>
                    <TableCell sx={{color: 'white', fontWeight: 'bold'}}>Input Price</TableCell>
                    <TableCell sx={{color: 'white', fontWeight: 'bold'}}>Output Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {geminiModels.map((model) => (
                      <TableRow
                          key={model.name}
                          sx={{
                            '&:hover': {bgcolor: 'action.hover'},
                            bgcolor: selectedModel.name === model.name ? 'action.selected' : 'inherit'
                          }}
                      >
                        <TableCell>
                          <Box sx={{display: 'flex', alignItems: 'center'}}>
                            {model.name}
                            {selectedModel.name === model.name && (
                                <Chip
                                    label="Selected"
                                    size="small"
                                    color="primary"
                                    sx={{ml: 1}}
                                />
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>{model.contextWindow}</TableCell>
                        <TableCell>{model.inputPricing}</TableCell>
                        <TableCell>{model.outputPricing}</TableCell>
                      </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={{mt: 4, p: 2, bgcolor: 'grey.100', borderRadius: 1}}>
              <Typography variant="caption" color="text.secondary">
                * Prices based on Gemini API documentation. All costs are in USD.
              </Typography>
              <br/>
              <Typography variant="caption" color="text.secondary">
                * Token estimates are approximate. Actual token counts may vary based on content.
              </Typography>
            </Box>
          </Paper>
        </Container>
      </ThemeProvider>
  );
}