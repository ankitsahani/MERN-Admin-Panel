import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Edit({ auth }) {
    const { user } = usePage().props;

    const { data, setData, put, errors } = useForm({
        name: user.name || '',
        email: user.email || "",
    });
    console.log(data);
    function handleSubmit(e) {
        e.preventDefault();
        put(route("user.update", user.id), data);
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    User Edit
                </h2>
            }
        >
            <Head title="Users" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Name</label>
                                        <input
                                            onChange={(e) => 
                                                setData("name", e.target.value)
                                            
                                            }
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Name"
                                            name="name"
                                            value={data.name}
                                        />
                                        <span className="text-red-600">
                                            {errors.name}
                                        </span>
                                    </div>
                                    <div className="mb-0">
                                        <label className="">Email</label>
                                        <input
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                            type="email"
                                            className="w-full rounded"
                                            label="email"
                                            name="email"
                                            errors={errors.email}
                                            value={data.email}
                                        />
                                        <span className="text-red-600">
                                            {errors.email}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-rows-4 grid-flow-col gap-4 mt-4">
                                    <div>
                                        <button
                                            type="submit"
                                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                        >
                                            Update
                                        </button>
                                    </div>
                                    <div>
                                        <Link
                                            className="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                            href={route("users.index")}
                                        >
                                            Back
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
