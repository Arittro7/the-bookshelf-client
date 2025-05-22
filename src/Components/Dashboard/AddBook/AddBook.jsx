import { useState } from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAddBookMutation } from '../../../redux/Features/Books/booksAPI';

const AddBook = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [imageFile, setimageFile] = useState('null'); //note: att2
  const [imageFileName, setImageFileName] = useState('');
  const [addBook, { isLoading, isError }] = useAddBookMutation();

  const onSubmit = async (data) => {
    const newBookData = {
      ...data,
      coverImage: imageFileName,
      trending: data.trending || false,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
    };

    try {
      await addBook(newBookData).unwrap();
      Swal.fire({
        title: "Book added",
        text: "New book has been uploaded successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK"
      });
      reset();
      setImageFileName('');
      setimageFile(null)
    } catch (error) {
      Swal.fire({
        title: "Failed",
        text: error?.data?.message || "Failed to add book. Please try again.",
        icon: "error"
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setimageFile(file)
      setImageFileName(file.name);
    }
  };

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
          required
        />

        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
          required
        />

        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose A Category' },
            { value: 'business', label: 'Business' },
            { value: 'technology', label: 'Technology' },
            { value: 'fiction', label: 'Fiction' },
            { value: 'horror', label: 'Horror' },
            { value: 'adventure', label: 'Adventure' },
          ]}
          register={register}
          required
        />

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>

        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
          required
        />

        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
          required
        />

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-2 w-full"
          />
          {imageFileName && (
            <p className="text-sm text-gray-500">Selected: {imageFileName}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
        >
          {isLoading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
