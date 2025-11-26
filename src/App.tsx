import { useState } from 'react'
import { Calendar } from './components'
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
          <h2>Takvim Bileşeni</h2>
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            weekStartsOn={1}
          />
          
          {selectedDate && (
            <div className="selected-date-info">
              <p>
                <strong>Seçili Tarih:</strong>{' '}
                {selectedDate.toLocaleDateString('tr-TR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
