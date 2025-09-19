import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, ArrowLeft, FileText, TrendingUp, Info } from "lucide-react";

const TransferDutyCalculator = () => {
  const [propertyValue, setPropertyValue] = useState("");
  const [result, setResult] = useState<{
    transferDuty: number;
    effectiveRate: number;
    breakdown: Array<{bracket: string, rate: string, amount: number}>;
  } | null>(null);

  const calculateTransferDuty = () => {
    const value = parseFloat(propertyValue);
    if (!value) return;

    // South African Transfer Duty rates (2024)
    const brackets = [
      { min: 0, max: 1000000, rate: 0 },
      { min: 1000001, max: 1375000, rate: 3 },
      { min: 1375001, max: 1925000, rate: 6 },
      { min: 1925001, max: 2475000, rate: 8 },
      { min: 2475001, max: 11000000, rate: 11 },
      { min: 11000001, max: Infinity, rate: 13 }
    ];

    let totalDuty = 0;
    const breakdown = [];

    for (const bracket of brackets) {
      if (value > bracket.min) {
        const taxableAmount = Math.min(value, bracket.max) - bracket.min + 1;
        const dutyForBracket = taxableAmount * (bracket.rate / 100);
        
        if (dutyForBracket > 0) {
          totalDuty += dutyForBracket;
          breakdown.push({
            bracket: bracket.max === Infinity 
              ? `R${bracket.min.toLocaleString()}+` 
              : `R${bracket.min.toLocaleString()} - R${bracket.max.toLocaleString()}`,
            rate: `${bracket.rate}%`,
            amount: dutyForBracket
          });
        }
      }
    }

    const effectiveRate = (totalDuty / value) * 100;

    setResult({
      transferDuty: totalDuty,
      effectiveRate,
      breakdown
    });
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
            <FileText className="w-12 h-12 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Transfer Duty Calculator</h1>
              <p className="text-xl opacity-90">Calculate transfer duty payable on property purchases in South Africa</p>
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
                  <Calculator className="w-6 h-6 mr-2 text-accent" />
                  Property Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="propertyValue">Property Purchase Price (R)</Label>
                  <Input
                    id="propertyValue"
                    type="number"
                    placeholder="2,500,000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the agreed purchase price of the property
                  </p>
                </div>
                
                <Button onClick={calculateTransferDuty} className="w-full bg-gradient-accent">
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculate Transfer Duty
                </Button>

                {/* Transfer Duty Rates Table */}
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3">2024 Transfer Duty Rates</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>R0 - R1,000,000</span>
                      <span className="font-semibold">0%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R1,000,001 - R1,375,000</span>
                      <span className="font-semibold">3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R1,375,001 - R1,925,000</span>
                      <span className="font-semibold">6%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R1,925,001 - R2,475,000</span>
                      <span className="font-semibold">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R2,475,001 - R11,000,000</span>
                      <span className="font-semibold">11%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>R11,000,001+</span>
                      <span className="font-semibold">13%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-accent" />
                  Transfer Duty Calculation
                </CardTitle>
              </CardHeader>
              <CardContent>
                {result ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-accent p-6 rounded-lg text-accent-foreground">
                      <p className="text-sm opacity-90 mb-2">Total Transfer Duty</p>
                      <p className="text-3xl font-bold">{formatCurrency(result.transferDuty)}</p>
                      <p className="text-sm opacity-75 mt-2">
                        Effective rate: {result.effectiveRate.toFixed(2)}%
                      </p>
                    </div>
                    
                    {result.breakdown.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Calculation Breakdown</h4>
                        <div className="space-y-2">
                          {result.breakdown.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2 border-b border-muted">
                              <div>
                                <p className="text-sm font-medium">{item.bracket}</p>
                                <p className="text-xs text-muted-foreground">at {item.rate}</p>
                              </div>
                              <p className="font-semibold">{formatCurrency(item.amount)}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Important Notes:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Transfer duty is payable by the purchaser</li>
                            <li>• Payment is due within 6 months of the transfer date</li>
                            <li>• First-time homebuyers may qualify for exemptions</li>
                            <li>• VAT may apply to new properties instead of transfer duty</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter the property value to calculate transfer duty</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Understanding Transfer Duty</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">What is Transfer Duty?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Transfer duty is a tax levied by the South African government on the transfer of property ownership. 
                      It's calculated as a percentage of the property's purchase price or market value, whichever is higher.
                    </p>
                    <h4 className="font-semibold text-primary mb-3">Who Pays Transfer Duty?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• The purchaser (buyer) of the property</li>
                      <li>• Payable to the South African Revenue Service (SARS)</li>
                      <li>• Collected by the conveyancing attorney</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Exemptions & Special Cases</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• First-time homebuyers (properties under R1 million)</li>
                      <li>• New properties may be subject to VAT instead</li>
                      <li>• Certain agricultural properties may qualify for relief</li>
                      <li>• Transfers between spouses are exempt</li>
                    </ul>
                    <h4 className="font-semibold text-primary mb-3 mt-6">Additional Costs</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Conveyancing attorney fees</li>
                      <li>• Bond registration costs</li>
                      <li>• Property valuation fees</li>
                      <li>• FICA compliance costs</li>
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

export default TransferDutyCalculator;