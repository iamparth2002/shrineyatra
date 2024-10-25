import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function AttractionCard({
  data
}) {
  return (
    <Link href={`/attraction/${data._id}`}>
    <Card className="relative w-[360px] max-w-sm overflow-hidden group">
      <div className="aspect-[3/4] w-full">
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_URL+ data.image}
          alt={data.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <CardContent className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-2xl font-bold text-white mb-2">{data.heading}</h3>
      </CardContent>
    </Card>
    </Link>

  );
}
