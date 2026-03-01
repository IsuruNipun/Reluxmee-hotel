
const Reviews = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Guest Experiences</h2>
                    <div className="flex justify-center gap-1 text-amber-500 mb-4">
                        {/* 5 Stars */}
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                        ))}
                    </div>
                    <p className="text-gray-600">Rated highly by our guests for cleanliness, comfort, and service.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl relative">
                        <span className="text-6xl text-amber-200 absolute top-4 left-4 font-serif leading-none">“</span>
                        <p className="text-gray-700 italic relative z-10 mb-6">
                            The rooftop view is absolutely stunning! The rooms are modern and very clean. Staff was incredibly helpful with arranging our tour to the sacred city. Highly recommended.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">SM</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Sarah Mitchell</h4>
                                <span className="text-xs text-gray-500">United Kingdom</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl relative">
                        <span className="text-6xl text-amber-200 absolute top-4 left-4 font-serif leading-none">“</span>
                        <p className="text-gray-700 italic relative z-10 mb-6">
                            Perfect location for visiting Anuradhapura. The hotel is peaceful despite being in the town. The room was spacious and the bed very comfortable.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold">DK</div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">David Kumar</h4>
                                <span className="text-xs text-gray-500">Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;

