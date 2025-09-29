"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar, Users, Phone, Mail, Clock, User, MessageSquare, CheckCircle, XCircle,
  BarChart3, TrendingUp, Activity, Search, Filter, Eye, Edit, Trash2,
  Bell, Settings, Home, LogOut, RefreshCw, Download, Plus, ChevronDown
} from "lucide-react";

interface Appointment {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  service_display: string;
  age: number;
  location: string;
  date: string;
  time: string;
  message: string;
  status: string;
  status_display: string;
  created_at: string;
}

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  concern_type: string;
  concern_type_display: string;
  subject: string;
  message: string;
  status: string;
  status_display: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [activeTab, setActiveTab] = useState<'appointments' | 'contacts'>('appointments');
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [authError, setAuthError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Authentication function
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    // Simple authentication check (you can replace with actual Django auth API)
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setAuthError('Invalid credentials');
    }
  };

  // Fetch appointments and contacts
  const fetchData = async () => {
    try {
      const [appointmentsRes, contactsRes] = await Promise.all([
        fetch('http://localhost:8000/api/appointments/list/'),
        fetch('http://localhost:8000/api/contacts/list/')
      ]);

      const appointmentsData = await appointmentsRes.json();
      const contactsData = await contactsRes.json();

      setAppointments(appointmentsData);
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Update status
  const updateStatus = async (type: 'appointments' | 'contacts', id: number, status: string) => {
    try {
      const endpoint = type === 'appointments'
        ? `http://localhost:8000/api/appointments/${id}/`
        : `http://localhost:8000/api/contacts/${id}/`;

      await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      // Refresh data
      fetchData();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Filter data based on search and status
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || appointment.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const stats = {
    totalAppointments: appointments.length,
    pendingAppointments: appointments.filter(a => a.status === 'pending').length,
    confirmedAppointments: appointments.filter(a => a.status === 'confirmed').length,
    totalContacts: contacts.length,
    newContacts: contacts.filter(c => c.status === 'new').length,
    repliedContacts: contacts.filter(c => c.status === 'replied').length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex items-center justify-center">
        <div className="bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Portal
            </h2>
            <p className="text-gray-600">Sign in to access dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 shadow-sm"
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 shadow-sm"
                placeholder="Enter password"
                required
              />
            </div>
            {authError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-600 text-sm">
                {authError}
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white dark:bg-gray-800 shadow-xl transition-all duration-300 border-r border-gray-200 dark:border-gray-700`}>
        <div className="p-6">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div>
                <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  True Relief
                </h1>
                <p className="text-sm text-gray-500">Admin Portal</p>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <BarChart3 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <nav className="mt-8">
          <div className="space-y-2 px-4">
            <button
              onClick={() => setActiveTab('appointments')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'appointments'
                  ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5" />
              {sidebarOpen && (
                <div className="ml-3 flex-1 text-left">
                  <span className="font-medium">Appointments</span>
                  <div className="text-xs text-gray-500">{appointments.length} total</div>
                </div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('contacts')}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === 'contacts'
                  ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 border-r-2 border-green-600'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              {sidebarOpen && (
                <div className="ml-3 flex-1 text-left">
                  <span className="font-medium">Contacts</span>
                  <div className="text-xs text-gray-500">{contacts.length} total</div>
                </div>
              )}
            </button>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4">
            <div className="px-4">
              <button
                onClick={() => setIsAuthenticated(false)}
                className="w-full flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                {sidebarOpen && <span className="ml-3">Logout</span>}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeTab === 'appointments' ? 'Appointments' : 'Contact Messages'}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage your {activeTab === 'appointments' ? 'patient appointments' : 'customer inquiries'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={fetchData}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </button>
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Last updated: {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Appointments</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+{stats.pendingAppointments} pending</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Confirmed Today</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.confirmedAppointments}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <Activity className="h-4 w-4 text-blue-500 mr-1" />
                <span className="text-sm text-blue-500">Active appointments</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Messages</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalContacts}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <Bell className="h-4 w-4 text-orange-500 mr-1" />
                <span className="text-sm text-orange-500">{stats.newContacts} new messages</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Response Rate</p>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stats.totalContacts > 0 ? Math.round((stats.repliedContacts / stats.totalContacts) * 100) : 0}%
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">{stats.repliedContacts} replied</span>
              </div>
            </div>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="all">All Status</option>
                  {activeTab === 'appointments' ? (
                    <>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </>
                  ) : (
                    <>
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="replied">Replied</option>
                      <option value="closed">Closed</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-gray-600 dark:text-gray-300">Loading data...</span>
          </div>
        ) : (
          <>
            {/* Appointments Tab */}
            {activeTab === 'appointments' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Patient</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Contact</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Appointment</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Service</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredAppointments.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col items-center">
                              <Calendar className="h-12 w-12 text-gray-300 mb-4" />
                              <p className="text-lg font-medium mb-2">No appointments found</p>
                              <p className="text-sm">Try adjusting your search or filter criteria</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredAppointments.map((appointment) => (
                          <tr key={appointment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mr-4">
                                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    {appointment.name}
                                  </div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Age: {appointment.age} years
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                  {appointment.email}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                  {appointment.phone}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center text-sm text-gray-900 dark:text-white">
                                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                  {appointment.date}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                  {appointment.time}
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {appointment.location}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900 dark:text-white font-medium">
                                {appointment.service_display}
                              </div>
                              {appointment.message && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs truncate">
                                  Note: {appointment.message}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                                appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                appointment.status === 'confirmed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                appointment.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                              }`}>
                                {appointment.status_display}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <select
                                  value={appointment.status}
                                  onChange={(e) => updateStatus('appointments', appointment.id, e.target.value)}
                                  className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                                >
                                  <option value="pending">Pending</option>
                                  <option value="confirmed">Confirmed</option>
                                  <option value="completed">Completed</option>
                                  <option value="cancelled">Cancelled</option>
                                </select>
                                <button className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                  <Eye className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Contact</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Contact Info</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Subject & Type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Message</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {filteredContacts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                            <div className="flex flex-col items-center">
                              <MessageSquare className="h-12 w-12 text-gray-300 mb-4" />
                              <p className="text-lg font-medium mb-2">No messages found</p>
                              <p className="text-sm">Try adjusting your search or filter criteria</p>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredContacts.map((contact) => (
                          <tr key={contact.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mr-4">
                                  <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    {contact.name}
                                  </div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">
                                    {new Date(contact.created_at).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="space-y-1">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <Mail className="h-4 w-4 mr-2 text-gray-400" />
                                  {contact.email}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                  <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                  {contact.phone}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                  {contact.subject}
                                </div>
                                <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-md bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                  {contact.concern_type_display}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="max-w-xs">
                                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                                  {contact.message}
                                </p>
                                {contact.message.length > 100 && (
                                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1">
                                    Read more
                                  </button>
                                )}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${
                                contact.status === 'new' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                                contact.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                contact.status === 'replied' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                                'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                              }`}>
                                {contact.status_display}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center space-x-2">
                                <select
                                  value={contact.status}
                                  onChange={(e) => updateStatus('contacts', contact.id, e.target.value)}
                                  className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
                                >
                                  <option value="new">New</option>
                                  <option value="in_progress">In Progress</option>
                                  <option value="replied">Replied</option>
                                  <option value="closed">Closed</option>
                                </select>
                                <button className="p-2 text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                                  <Eye className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
            <div>
              <p>© 2024 True Relief Physio - Admin Dashboard</p>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>System Online</span>
              </div>
              <div className="text-xs">
                Dr. Rajan Sharma [PT]
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}