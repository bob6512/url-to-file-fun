import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ArrowLeft, PiggyBank, TrendingUp, Home } from "lucide-react";

const BondCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateBond = () => {
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (principal && monthlyRate && numberOfPayments) {
      const monthlyPayment = 
        principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

      const totalPayment = monthlyPayment * numberOfPayments;
      const totalInterest = totalPayment - principal;

      setResult({
        monthlyPayment,
        totalPayment,
        totalInterest
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
            <Calculator className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Bond Calculator</h1>
              <p className="text-xl opacity-90">Calculate your monthly home loan payments</p>
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
                  <PiggyBank className="w-6 h-6 mr-2 text-accent" />
                  Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount (R)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="2,500,000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    placeholder="11.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="loanTerm">Loan Term (years)</Label>
                  <Input
                    id="loanTerm"
                    type="number"
                    placeholder="20"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                  />
                </div>
                
                <Button onClick={calculateBond} className="w-full bg-gradient-accent">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Bond Payment
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-accent" />
                  Calculation Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-accent p-6 rounded-lg text-accent-foreground">
                      <p className="text-sm opacity-90 mb-2">Monthly Payment</p>
                      <p className="text-3xl font-bold">{formatCurrency(result.monthlyPayment)}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-2">Total Payment</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(result.totalPayment)}</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg text-center">
                        <p className="text-sm text-muted-foreground mb-2">Total Interest</p>
                        <p className="text-xl font-bold text-primary">{formatCurrency(result.totalInterest)}</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Important Notes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• This calculation is for estimation purposes only</li>
                        <li>• Actual rates may vary based on your credit profile</li>
                        <li>• Additional costs like insurance and legal fees not included</li>
                        <li>• Interest rates subject to change</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter your loan details to see calculated payments</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Your Home Loan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Factors Affecting Your Rate</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Credit score and history</li>
                      <li>• Deposit amount (loan-to-value ratio)</li>
                      <li>• Employment history and income</li>
                      <li>• Property type and value</li>
                      <li>• Current market conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Additional Costs to Consider</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Transfer duty (government tax)</li>
                      <li>• Legal fees and conveyancing</li>
                      <li>• Property valuation and inspection</li>
                      <li>• Home insurance premiums</li>
                      <li>• Monthly property taxes and levies</li>
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

export default BondCalculator;