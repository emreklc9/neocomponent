import { useState } from 'react'
import { Calendar, Button, Text } from './components'
import './App.css'

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    console.log('Seçilen tarih:', date.toLocaleDateString('tr-TR'))
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>NeoComponent Kütüphanesi</h1>
        <p>Takvim Bileşeni Demo</p>
      </div>
      
      <div className="app-content">
        <div className="calendar-demo">
          <Text as="h2" size="2xl" weight="bold" className="demo-title">
            Takvim Bileşeni
          </Text>
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            weekStartsOn={1}
          />
          
          {selectedDate && (
            <div className="selected-date-info">
              <Text size="md" color="secondary">
                <strong>Seçili Tarih:</strong>{' '}
                {selectedDate.toLocaleDateString('tr-TR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Text>
            </div>
          )}
        </div>

        <div className="button-demo">
          <Text as="h2" size="2xl" weight="bold" className="demo-title">
            Button Bileşeni
          </Text>
          <div className="button-group">
            <Button variant="primary" size="medium">
              Primary Button
            </Button>
            <Button variant="secondary" size="medium">
              Secondary Button
            </Button>
            <Button variant="outline" size="medium">
              Outline Button
            </Button>
            <Button variant="ghost" size="medium">
              Ghost Button
            </Button>
            <Button variant="danger" size="medium">
              Danger Button
            </Button>
          </div>
          <div className="button-group">
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
          </div>
          <div className="button-group">
            <Button variant="primary" loading>
              Loading...
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" fullWidth>
              Full Width Button
            </Button>
          </div>
        </div>

        <div className="text-demo">
          <Text as="h2" size="2xl" weight="bold" className="demo-title">
            Text Bileşeni
          </Text>
          <div className="text-group">
            <Text size="xs">Extra Small Text (xs)</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="md">Medium Text (md)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="xl">Extra Large Text (xl)</Text>
            <Text size="2xl">2X Large Text (2xl)</Text>
            <Text size="3xl">3X Large Text (3xl)</Text>
          </div>
          <div className="text-group">
            <Text weight="normal">Normal Weight</Text>
            <Text weight="medium">Medium Weight</Text>
            <Text weight="semibold">Semibold Weight</Text>
            <Text weight="bold">Bold Weight</Text>
          </div>
          <div className="text-group">
            <Text color="default">Default Color</Text>
            <Text color="primary">Primary Color</Text>
            <Text color="secondary">Secondary Color</Text>
            <Text color="success">Success Color</Text>
            <Text color="warning">Warning Color</Text>
            <Text color="error">Error Color</Text>
            <Text color="muted">Muted Color</Text>
          </div>
          <div className="text-group">
            <Text align="left">Left Aligned Text</Text>
            <Text align="center">Center Aligned Text</Text>
            <Text align="right">Right Aligned Text</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
