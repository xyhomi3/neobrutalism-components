import { Button } from '@/components/ui/button'

export default function ButtonDemo() {
  return (
    <div className="flex flex-col gap-5">
      <Button>Default</Button>
      <Button variant="noShadow">No Shadow</Button>
      <Button variant="neutral">Neutral</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
