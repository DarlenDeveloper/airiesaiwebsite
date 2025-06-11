import { Link } from 'react-router-dom';
import { FiHome, FiPhone, FiClock, FiCheckCircle, FiXCircle, FiBarChart2, FiSettings } from 'react-icons/fi';

export default function Dashboard() {
  // Mock data for dashboard
  const stats = [
    { id: 1, name: 'Total Calls', value: '1,284', icon: <FiPhone className="h-6 w-6" /> },
    { id: 2, name: 'Total Minutes', value: '4,826', icon: <FiClock className="h-6 w-6" /> },
    { id: 3, name: 'Resolved Issues', value: '924', icon: <FiCheckCircle className="h-6 w-6" /> },
    { id: 4, name: 'Unresolved Issues', value: '360', icon: <FiXCircle className="h-6 w-6" /> },
  ];

  const recentCalls = [
    {
      id: 1,
      phoneNumber: '+1 (555) 123-4567',
      date: '2023-06-15',
      duration: '5:24',
      summary: 'Customer inquired about changing their subscription plan. The AI agent provided information about available plans and guided them through the upgrade process.',
      resolved: true,
    },
    {
      id: 2,
      phoneNumber: '+1 (555) 987-6543',
      date: '2023-06-14',
      duration: '3:12',
      summary: 'Customer reported an issue with account login. The AI agent helped reset the password and verified successful login.',
      resolved: true,
    },
    {
      id: 3,
      phoneNumber: '+1 (555) 456-7890',
      date: '2023-06-14',
      duration: '7:45',
      summary: 'Customer had questions about product features. The AI agent explained the features and provided documentation links.',
      resolved: true,
    },
    {
      id: 4,
      phoneNumber: '+1 (555) 789-0123',
      date: '2023-06-13',
      duration: '4:18',
      summary: 'Customer requested a refund for a recent purchase. The AI agent escalated to the billing department as it could not be handled automatically.',
      resolved: false,
    },
    {
      id: 5,
      phoneNumber: '+1 (555) 234-5678',
      date: '2023-06-13',
      duration: '2:56',
      summary: 'Customer asked about shipping status for their order. The AI agent provided tracking information and estimated delivery date.',
      resolved: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary text-white">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">AIRIES AI</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <span className="text-sm text-white/80">Company:</span>
                <span className="ml-2 font-medium">Acme Corporation</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-lg font-bold">A</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="md:w-64 mb-8 md:mb-0 md:mr-8">
            <div className="bg-white rounded-xl shadow-sm p-4">
              <nav className="space-y-2">
                <Link to="/dashboard" className="flex items-center px-4 py-3 bg-primary/10 text-primary rounded-lg font-medium">
                  <FiHome className="mr-3 h-5 w-5" /> Dashboard
                </Link>
                <Link to="/dashboard/calls" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FiPhone className="mr-3 h-5 w-5" /> Call History
                </Link>
                <Link to="/dashboard/analytics" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FiBarChart2 className="mr-3 h-5 w-5" /> Analytics
                </Link>
                <Link to="/dashboard/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FiSettings className="mr-3 h-5 w-5" /> Settings
                </Link>
              </nav>
              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Plan</h4>
                <div className="text-lg font-bold text-primary">Business</div>
                <div className="text-sm text-gray-700 mt-1">5,000 minutes / month</div>
                <div className="mt-3 text-sm text-gray-700 flex justify-between">
                  <span>Used</span>
                  <span className="font-medium">4,826 min (96.5%)</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '96.5%' }}></div>
                </div>
                <Link to="/dashboard/billing" className="mt-4 text-sm text-primary font-medium block hover:underline">
                  Upgrade Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center">
                    <div className="mr-4 p-3 rounded-lg bg-primary/10 text-primary">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{stat.name}</div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Recent Calls */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Recent Calls</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Summary</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentCalls.map((call) => (
                      <tr key={call.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">{call.phoneNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{call.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{call.duration}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {call.resolved ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Resolved
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                              Unresolved
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-sm text-gray-500 max-w-lg truncate">{call.summary}</p>
                          <button className="text-xs text-primary font-medium mt-1 hover:underline">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-right">
                <Link to="/dashboard/calls" className="text-sm text-primary font-medium hover:underline">
                  View All Calls
                </Link>
              </div>
            </div>
            
            {/* Usage Graph (placeholder) */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Usage Analytics</h2>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Usage graph visualization would appear here</p>
              </div>
              <div className="mt-4 text-right">
                <Link to="/dashboard/analytics" className="text-sm text-primary font-medium hover:underline">
                  View Detailed Analytics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 