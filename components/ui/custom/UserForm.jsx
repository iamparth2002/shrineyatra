import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function UserForm({title,price,originalPrice,tripId}) {
  return (
    <Card className="w-full max-w-md mx-auto border-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">INR {price}</span>
          <span className="text-sm text-muted-foreground line-through">INR {originalPrice}</span>
          <span className="text-xs text-green-600 font-semibold">SAVE INR {originalPrice-price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name*</Label>
            <Input id="fullName" placeholder="Full Name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input id="email" type="email" placeholder="Email" required />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <Select defaultValue="+91">
              <SelectTrigger>
                <SelectValue placeholder="Code" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                {/* Add more country codes as needed */}
              </SelectContent>
            </Select>
            <Input className="col-span-3" placeholder="Your Phone*" required />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor="travelDate">Travel Date*</Label>
              <Input id="travelDate" type="date" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="travellerCount">Traveller Count*</Label>
              <Input id="travellerCount" type="number" min="1" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Message..." />
          </div>
          <Button className="w-full bg-orange-500 hover:bg-orange-600" type="submit">
            Send Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}