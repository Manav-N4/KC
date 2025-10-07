import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Copy, MessageCircle, Mail, Send, Check, Users } from "lucide-react";
import { motion } from "motion/react";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReferralSent: () => void;
}

export function ReferralModal({ isOpen, onClose, onReferralSent }: ReferralModalProps) {
  const [referralCode] = useState("ATH" + Math.random().toString(36).substr(2, 8).toUpperCase());
  const [referralLink] = useState(`https://athleteconnect.in/join?ref=${referralCode.toLowerCase()}`);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedShare, setSelectedShare] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const shareVia = (platform: string) => {
    setSelectedShare(platform);
    const message = `🏆 Join me on AthleteConnect - India's premier athlete networking platform! Use my referral code: ${referralCode} or join directly: ${referralLink}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
        break;
      case 'sms':
        shareUrl = `sms:?body=${encodeURIComponent(message)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=Join AthleteConnect&body=${encodeURIComponent(message)}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
      // Simulate successful referral after a delay
      setTimeout(() => {
        onReferralSent();
        setSelectedShare(null);
      }, 1000);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader className="text-center space-y-2">
          <div className="w-16 h-16 bg-gradient-to-br from-athlete-saffron to-athlete-saffron-dark rounded-full flex items-center justify-center mx-auto mb-2">
            <Users className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-gray-800">
            Invite your friends to join AthleteConnect
          </DialogTitle>
          <p className="text-sm text-gray-600 leading-relaxed">
            Referrals add to your merit score and credibility. The more athletes you bring, 
            the stronger your profile looks to recruiters and schools.
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {/* Referral Code */}
          <Card className="border-athlete-saffron/20 bg-athlete-saffron-light/30">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Your Referral Code</p>
                  <p className="text-lg text-athlete-saffron">{referralCode}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(referralCode, 'code')}
                  className="border-athlete-saffron text-athlete-saffron hover:bg-athlete-saffron hover:text-white transition-all duration-200"
                >
                  {copiedCode ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="flex items-center space-x-1"
                    >
                      <Check className="w-4 h-4" />
                      <span className="text-xs">Copied!</span>
                    </motion.div>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Referral Link */}
          <Card className="border-athlete-green/20 bg-athlete-green-light/30">
            <CardContent className="p-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Referral Link</p>
                <div className="flex items-center space-x-2">
                  <Input
                    value={referralLink}
                    readOnly
                    className="text-xs bg-white border-athlete-green/30"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(referralLink, 'link')}
                    className="border-athlete-green text-athlete-green hover:bg-athlete-green hover:text-white transition-all duration-200 flex-shrink-0"
                  >
                    {copiedLink ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center"
                      >
                        <Check className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Share Options */}
          <div className="space-y-3">
            <p className="text-sm text-gray-700">Share via:</p>
            <div className="grid grid-cols-3 gap-3">
              <Button
                onClick={() => shareVia('whatsapp')}
                className="flex flex-col items-center space-y-2 p-4 h-auto bg-green-500 hover:bg-green-600 text-white transition-all duration-200 hover:scale-105"
                disabled={selectedShare === 'whatsapp'}
              >
                {selectedShare === 'whatsapp' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center space-y-1"
                  >
                    <Check className="w-6 h-6" />
                    <span className="text-xs">Shared!</span>
                  </motion.div>
                ) : (
                  <>
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-xs">WhatsApp</span>
                  </>
                )}
              </Button>

              <Button
                onClick={() => shareVia('sms')}
                className="flex flex-col items-center space-y-2 p-4 h-auto bg-athlete-blue hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105"
                disabled={selectedShare === 'sms'}
              >
                {selectedShare === 'sms' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center space-y-1"
                  >
                    <Check className="w-6 h-6" />
                    <span className="text-xs">Sent!</span>
                  </motion.div>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span className="text-xs">SMS</span>
                  </>
                )}
              </Button>

              <Button
                onClick={() => shareVia('email')}
                className="flex flex-col items-center space-y-2 p-4 h-auto bg-athlete-navy hover:bg-blue-800 text-white transition-all duration-200 hover:scale-105"
                disabled={selectedShare === 'email'}
              >
                {selectedShare === 'email' ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex flex-col items-center space-y-1"
                  >
                    <Check className="w-6 h-6" />
                    <span className="text-xs">Sent!</span>
                  </motion.div>
                ) : (
                  <>
                    <Mail className="w-6 h-6" />
                    <span className="text-xs">Email</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Merit Info */}
          <Card className="border-athlete-navy/20 bg-athlete-navy-light/30">
            <CardContent className="p-3">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-athlete-navy rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  Each friend who joins using your referral adds +5 points to your merit score, 
                  making your profile more attractive to recruiters and schools.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center pt-4">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full transition-all duration-200 hover:shadow-md"
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}