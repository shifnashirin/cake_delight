import React, { useState } from 'react';
import { MapPin, Home, Building2, Navigation, Plus } from 'lucide-react';

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  label: string;
  address: string;
  isDefault: boolean;
}

export function LocationSelection() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      type: 'home',
      label: 'Home',
      address: '123 Main Street, Apartment 4B, New York, NY 10001',
      isDefault: true,
    },
    {
      id: '2',
      type: 'work',
      label: 'Office',
      address: '456 Business Ave, Suite 200, New York, NY 10002',
      isDefault: false,
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState<string>(addresses[0].id);
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'home' as const,
    label: '',
    address: '',
  });

  const handleAddressSelect = (addressId: string) => {
    setSelectedAddress(addressId);
  };

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const address: Address = {
      id: Date.now().toString(),
      ...newAddress,
      isDefault: false,
    };
    setAddresses([...addresses, address]);
    setShowNewAddressForm(false);
    setNewAddress({ type: 'home', label: '', address: '' });
  };

  const getAddressIcon = (type: Address['type']) => {
    switch (type) {
      case 'home':
        return Home;
      case 'work':
        return Building2;
      default:
        return MapPin;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-dark mb-2">Delivery Location</h1>
        <p className="text-primary-dark/60">Choose where you want your cake delivered</p>
      </div>

      <div className="space-y-4 mb-8">
        {addresses.map((address) => {
          const Icon = getAddressIcon(address.type);
          return (
            <button
              key={address.id}
              onClick={() => handleAddressSelect(address.id)}
              className={`w-full text-left p-4 rounded-lg border ${
                selectedAddress === address.id
                  ? 'border-primary bg-secondary/50'
                  : 'border-secondary bg-white'
              } hover:border-primary transition-colors`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary rounded-full">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary-dark">{address.label}</span>
                    {address.isDefault && (
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full text-primary-dark">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-primary-dark/60 text-sm mt-1">{address.address}</p>
                </div>
                <div className="w-6 h-6 rounded-full border-2 border-primary flex-shrink-0 relative">
                  {selectedAddress === address.id && (
                    <div className="absolute inset-1 bg-primary rounded-full"></div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {!showNewAddressForm ? (
        <button
          onClick={() => setShowNewAddressForm(true)}
          className="w-full py-4 border-2 border-dashed border-secondary rounded-lg text-primary hover:border-primary hover:bg-secondary/20 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Address
        </button>
      ) : (
        <form onSubmit={handleAddNewAddress} className="bg-white p-6 rounded-lg border border-secondary">
          <h3 className="text-xl font-semibold text-primary-dark mb-4">Add New Address</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Address Type
              </label>
              <select
                value={newAddress.type}
                onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value as Address['type'] })}
                className="w-full px-3 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="home">Home</option>
                <option value="work">Work</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Label
              </label>
              <input
                type="text"
                value={newAddress.label}
                onChange={(e) => setNewAddress({ ...newAddress, label: e.target.value })}
                placeholder="E.g., My Apartment"
                className="w-full px-3 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-dark mb-1">
                Full Address
              </label>
              <textarea
                value={newAddress.address}
                onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })}
                placeholder="Enter your complete address"
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setShowNewAddressForm(false)}
              className="flex-1 bg-secondary hover:bg-secondary-dark text-primary-dark py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="mt-8">
        <button className="w-full bg-accent hover:bg-accent-dark text-white py-3 rounded-lg transition-colors">
          Proceed with Selected Address
        </button>
      </div>
    </div>
  );
}