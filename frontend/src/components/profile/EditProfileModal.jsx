import { useEffect, useState } from "react";
import { X } from "lucide-react";

import Button from "../common/Button";
import { updateUserByEmail } from "../../services/userService";

function EditProfileModal({ isOpen, onClose, user, onProfileUpdated }) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        city: "",
        country: "",
    });

    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || "",
                email: user.email || "",
                password: "",
                phone: user.phone || "",
                city: user.city || "",
                country: user.country || "",
            });
        }
    }, [user]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = async () => {
        try {
            setSaving(true);

            await updateUserByEmail(user.email, formData);

            onProfileUpdated();

            onClose();

        } catch (error) {
            alert(error.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                        Edit Profile
                    </h2>

                    <button onClick={onClose}>
                        <X size={22} />
                    </button>
                </div>

                <div className="space-y-5">

                    <div>
                        <label className="mb-2 block font-medium">
                            Full Name
                        </label>

                        <input
                            className="w-full rounded-xl border p-3"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Phone
                        </label>

                        <input
                            className="w-full rounded-xl border p-3"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            City
                        </label>

                        <input
                            className="w-full rounded-xl border p-3"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">
                            Country
                        </label>

                        <input
                            className="w-full rounded-xl border p-3"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        />
                    </div>

                </div>

                <div className="mt-8 flex justify-end gap-4">

                    <Button
                        onClick={onClose}
                        className="bg-gray-200 text-black hover:bg-gray-300"
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={handleSave}
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </Button>

                </div>

            </div>
        </div>
    );
}

export default EditProfileModal;