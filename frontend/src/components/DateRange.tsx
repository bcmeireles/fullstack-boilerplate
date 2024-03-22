import React, { useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import { addDays } from 'date-fns'

function DateRange() {
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ])

  const selectionRange = {
    startDate: state[0].startDate,
    endDate: state[0].endDate,
    key: 'selection',
  }

  const handleSelect = (ranges: RangeKeyDict) => {
    setState([ranges.selection])
  }

  return (
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      moveRangeOnFirstSelection={false}
      months={2}
      direction="horizontal"
      rangeColors={['#1E40AF']}
      className="border border-gray-300 rounded-md shadow-sm"
    />
  )
}

export default DateRange
