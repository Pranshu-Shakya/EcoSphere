import React, { useState } from 'react';

function LearnArticleCreate({ onCreate }) {
    const [form, setForm] = useState({
        title: '',
        summary: '',
        content: '',
        author: '',
        coverImage: '',
        tags: '',
        category: 'Beginner',
        type: 'Article',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.title || !form.content || !form.author) {
            setError('Title, Content, and Author are required.');
            return;
        }

        const newArticle = {
            ...form,
            tags: form.tags.split(',').map((tag) => tag.trim()).filter(Boolean),
            createdAt: new Date(),
        };

        if (onCreate) onCreate(newArticle);
        alert('Article created successfully!');

        setForm({
            title: '',
            summary: '',
            content: '',
            author: '',
            coverImage: '',
            tags: '',
            category: 'Beginner',
            type: 'Article',
        });
        setError('');
    };

    return (
        <div className='eco-static-bg p-10'>
            <h2 className="text-4xl font-bold text-white text-center mb-4 tracking-wide">
                Sow Words, Grow Change
            </h2>
             <p className='text-green-50 mb-5 text-lg text-center'>Inspire others with your green lifestyle tips, climate thoughts, or sustainability stories. Every article contributes to a more aware and eco-conscious world</p>

            <div className="max-w-3xl mx-auto p-6 bg-green-50 rounded-lg shadow-md">

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title *"
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <input
                        type="text"
                        name="summary"
                        value={form.summary}
                        onChange={handleChange}
                        placeholder="Summary"
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <textarea
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        placeholder="Full Content *"
                        rows={6}
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Author *"
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <input
                        type="text"
                        name="coverImage"
                        value={form.coverImage}
                        onChange={handleChange}
                        placeholder="Cover Image URL"
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <input
                        type="text"
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        placeholder="Tags (comma-separated)"
                        className="w-full text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                    />

                    <div className="flex flex-wrap gap-4">
                        <select
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className=" text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                        >
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>

                        <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            className="text-green-900 border-b-1 border-green-800 focus:border-green-600 outline-none py-2"
                        >
                            <option value="Article">Article</option>
                            <option value="Guide">Guide</option>
                            <option value="Video">Video</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className=" bg-emerald-400 text-green-900 font-semibold px-6 py-2 rounded-full shadow-[0_4px_0_#047857] hover:translate-y-[1px] hover:shadow-[0_2px_0_#047857] active:translate-y-[2px] active:shadow-none transition-all duration-150"
                    >
                        Publish
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LearnArticleCreate;
