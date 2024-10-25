import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function RenderDetailView({ activeSection, selectedItem, trips }) {
  if (!selectedItem) return null;

  console.log(selectedItem)

  const imageUrl = `http://localhost:5000/${selectedItem.image}`

  switch (activeSection) {
    case 'packages':
      return (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
          <p className="text-lg">{selectedItem.subHeading}</p>
          <img src={imageUrl} alt={selectedItem.title} className="w-full h-64 object-cover rounded-md" />
          <p>{selectedItem.description}</p>
          {/* <h4 className="text-xl font-semibold mt-6">Linked Trips</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trips
              .filter(trip => trip.packageId === selectedItem.id)
              .map(trip => (
                <Card key={trip.id} className="cursor-pointer hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{trip.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-gray-500">{trip.location}</p>
                    <p className="text-sm font-semibold">${trip.price}</p>
                  </CardContent>
                </Card>
              ))}
          </div> */}
        </div>
      );

    case 'trips':
      return (
        <div className="space-y-4">
  <h3 className="text-2xl font-bold">{selectedItem.name}</h3>
  <p className="text-lg">{selectedItem.location} - {selectedItem.days} days</p>
  <img src={imageUrl} alt={selectedItem.name} className="w-full h-64 object-cover rounded-md" />
  <p><strong>Price:</strong> ${selectedItem.price}</p>
  <p><strong>Real Price:</strong> ${selectedItem.realPrice}</p>
  <p>{selectedItem.description}</p>

  {/* Itinerary Section */}
  <div>
    <h4 className="text-xl font-semibold">Itinerary</h4>
    {selectedItem.itinerary.map((item, index) => (
      <div key={index} className="mb-4">
        <h5 className="text-lg font-semibold">Day {item.day}: {item.title}</h5>
        <ul className="list-disc list-inside">
          {item.description.map((activity, activityIndex) => (
            <li key={activityIndex}>{activity}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

  {/* Highlights Section */}
  <div>
    <h4 className="text-xl font-semibold">Highlights</h4>
    <ul className="list-disc list-inside">
      {selectedItem.highlights.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </ul>
  </div>

  {/* Inclusions Section */}
  <div>
    <h4 className="text-xl font-semibold">Inclusions</h4>
    <ul className="list-disc list-inside">
      {selectedItem.inclusions.map((inclusion, index) => (
        <li key={index}>{inclusion}</li>
      ))}
    </ul>
  </div>

  {/* Exclusions Section */}
  <div>
    <h4 className="text-xl font-semibold">Exclusions</h4>
    <ul className="list-disc list-inside">
      {selectedItem.exclusions.map((exclusion, index) => (
        <li key={index}>{exclusion}</li>
      ))}
    </ul>
  </div>
</div>

      );

    case 'blogs':
      return (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
          <img src={imageUrl} alt={selectedItem.title} className="w-full h-64 object-cover rounded-md" />
          <p>{selectedItem.content}</p>
        </div>
      );

    case 'attractions':
      return (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{selectedItem.heading}</h3>
          <img src={imageUrl} alt={selectedItem.heading} className="w-full h-64 object-cover rounded-md" />
          <p>{selectedItem.details}</p>
        </div>
      );

    default:
      return null;
  }
}
