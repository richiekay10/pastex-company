import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80"
              alt="Jerry Tamakloe"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Founder</h2>
            <p className="text-gray-600 mb-6">
              Jerry Tamakloe founded Pastex with a vision to revolutionize the printing industry.
              With over two decades of experience in print technology and design, Jerry has built
              Pastex into a leading printing solutions provider.
            </p>
            <p className="text-gray-600 mb-6">
              Under his leadership, Pastex has grown from a small local print shop to a
              comprehensive printing services company, serving clients across multiple industries
              with innovative solutions and unwavering commitment to quality.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}