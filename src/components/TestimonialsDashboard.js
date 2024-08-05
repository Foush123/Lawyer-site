import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestimonialsDashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [form, setForm] = useState({ title: '', comment: '', name: '', position: '', avatar: '', rate: '' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('https://66a25d2f967c89168f1fcd48.mockapi.io/Testimonial/Testimonial');
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update testimonial
        await axios.put(`https://66a25d2f967c89168f1fcd48.mockapi.io/Testimonial/Testimonial/${editId}`, form);
      } else {
        // Create new testimonial
        await axios.post('https://66a25d2f967c89168f1fcd48.mockapi.io/Testimonial/Testimonial', form);
      }
      fetchTestimonials();
      setForm({ title: '', comment: '', name: '', position: '', avatar: '', rate: '' });
      setEditId(null);
    } catch (error) {
      console.error('Error saving testimonial:', error);
    }
  };

  const handleEdit = (testimonial) => {
    setForm(testimonial);
    setEditId(testimonial.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://66a25d2f967c89168f1fcd48.mockapi.io/Testimonial/Testimonial/${id}`);
      fetchTestimonials();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Testimonials Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea
            name="comment"
            className="form-control"
            value={form.comment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            value={form.position}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Avatar URL</label>
          <input
            type="text"
            name="avatar"
            className="form-control"
            value={form.avatar}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rate</label>
          <input
            type="number"
            name="rate"
            className="form-control"
            value={form.rate}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          {editId ? 'Update Testimonial' : 'Add Testimonial'}
        </button>
      </form>

      <h3 className="mt-5">Testimonials List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Comment</th>
            <th>Name</th>
            <th>Position</th>
            <th>Avatar</th>
            <th>Rate</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial.id}>
              <td>{testimonial.title}</td>
              <td>{testimonial.comment}</td>
              <td>{testimonial.name}</td>
              <td>{testimonial.position}</td>
              <td>
                <img src={testimonial.avatar} alt={testimonial.name} style={{ width: '50px', borderRadius: '50%' }} />
              </td>
              <td>{testimonial.rate}</td>
              <td>
                <button className="btn btn-warning" onClick={() => handleEdit(testimonial)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(testimonial.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialsDashboard;
