const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '300+' },
    { id: 2, name: 'Investment under holding', value: '$22,583 ' },
    { id: 3, name: 'New users annually', value: '125+' },
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="heading mb-16 text-center">
            <span className="text-3xl sm:text-4xl font-semibold text-gray-900">Block<span className="text-cyan-300">vest</span> Stats</span>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  