import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ArrowLeft, Wallet, TrendingUp, Home } from "lucide-react";

const AffordabilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [existingDebt, setExistingDebt] = useState("");
  const [interestRate, setInterestRate] = useState("11.5");
  const [loanTerm, setLoanTerm] = useState("20");
  const [result, setResult] = useState<{
    maxAffordable: number;
    maxLoanAmount: number;
    recommendedPayment: number;
    remainingIncome: number;
  } | null>(null);

  const calculateAffordability = () => {
    const income = parseFloat(monthlyIncome);
    const expenses = parseFloat(monthlyExpenses) || 0;
    const debt = parseFloat(existingDebt) || 0;
    const rate = parseFloat(interestRate);
    const term = parseFloat(loanTerm);

    if (income && rate && term) {
      // Calculate available income (conservative approach)
      const availableIncome = income - expenses - debt;
      
      // Banks typically allow 30-35% of gross income for housing
      const maxHousingPayment = Math.min(income * 0.32, availableIncome * 0.6);
      
      // Recommended payment (more conservative)
      const recommendedPayment = Math.min(income * 0.28, availableIncome * 0.5);
      
      // Calculate maximum loan amount based on payment capacity
      const monthlyRate = rate / 100 / 12;
      const numberOfPayments = term * 12;
      
      const maxLoanAmount = maxHousingPayment * 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1) / 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments));

      // Assume 10% deposit required, so property value is loan / 0.9
      const maxAffordable = maxLoanAmount / 0.9;
      
      const remainingIncome = income - recommendedPayment - expenses - debt;

      setResult({
        maxAffordable,
        maxLoanAmount,
        recommendedPayment,
        remainingIncome
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <Button asChild variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/calculators">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Calculators
              </Link>
            </Button>
          </div>
          <div className="flex items-center mb-6">
            <Home className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Affordability Calculator</h1>
              <p className="text-xl opacity-90">Find out how much property you can afford</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="w-6 h-6 mr-2 text-accent" />
                  Your Financial Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="monthlyIncome">Gross Monthly Income (R)</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="35,000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="monthlyExpenses">Monthly Expenses (R)</Label>
                  <Input
                    id="monthlyExpenses"
                    type="number"
                    placeholder="15,000"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Include food, transport, utilities, etc.
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="existingDebt">Existing Debt Payments (R)</Label>
                  <Input
                    id="existingDebt"
                    type="number"
                    placeholder="3,500"
                    value={existingDebt}
                    onChange={(e) => setExistingDebt(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Car payments, credit cards, personal loans
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="interestRate">Expected Interest Rate (%)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="loanTerm">Loan Term (years)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>
                
                <Button onClick={calculateAffordability} className="w-full bg-gradient-accent">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Affordability
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-accent" />
                  What You Can Afford
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-accent p-6 rounded-lg text-accent-foreground">
                      <p className="text-sm opacity-90 mb-2">Maximum Property Value</p>
                      <p className="text-3xl font-bold">{formatCurrency(result.maxAffordable)}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Maximum Loan Amount</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(result.maxLoanAmount)}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Recommended Monthly Payment</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(result.recommendedPayment)}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground mb-2">Remaining Monthly Income</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(result.remainingIncome)}</p>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">💡 Smart Tips:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Keep housing costs below 30% of gross income</li>
                        <li>• Save for a 10-20% deposit to get better rates</li>
                        <li>• Consider additional costs like levies and insurance</li>
                        <li>• Build an emergency fund for unexpected expenses</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Home className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter your financial details to see what you can afford</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-12 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Property Affordability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What Banks Consider</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Gross monthly income</li>
                      <li>• Existing debt obligations</li>
                      <li>• Credit score and history</li>
                      <li>• Employment stability</li>
                      <li>• Available deposit amount</li>
                      <li>• Property location and type</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Beyond the Loan Payment</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Property taxes and municipal rates</li>
                      <li>• Home insurance premiums</li>
                      <li>• Homeowners association levies</li>
                      <li>• Maintenance and repairs</li>
                      <li>• Utilities (if not included)</li>
                      <li>• Emergency fund for unexpected costs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AffordabilityCalculator;