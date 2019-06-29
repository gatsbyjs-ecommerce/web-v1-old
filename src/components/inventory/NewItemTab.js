import React from 'react';
import ProductCard from './ProductCard';

class NewItemTab extends React.Component {
  constructor() {
    super();
    this.state = {
      formErrors: {
        category: false,
        name: false,
        price: false,
        imageURL: false,
      },
    };
  }

  checkForm() {
    const category = document.getElementById('newItemForm-category').value;
    const name = document.getElementById('newItemForm-name').value;
    const price = document.getElementById('newItemForm-price').value;
    const imageURL = document.getElementById('newItemForm-imageURL').value;
    const product = {
      category,
      name,
      price,
      imageURL,
    };
    const errors = this.state.formErrors;
    category.length === 0
      ? (errors.category = true)
      : (errors.category = false);
    name.length === 0 ? (errors.name = true) : (errors.name = false);
    price.length === 0 ? (errors.price = true) : (errors.price = false);

    const image = new Image();
    image.onerror = () => {
      this.finalizeForm(false, product);
    };
    image.onload = () => {
      this.finalizeForm(true, product);
    };
    this.setState({ formErrors: errors });
    image.src = imageURL;
  }

  finalizeForm(isImageURLValid, product) {
    if (isImageURLValid === false) {
      const errors = this.state.formErrors;
      errors.imageURL = true;
      this.setState({ formErrors: errors });
    } else {
      this.props.addNewProduct(product);
    }
  }

  renderCategorySelections(inventory) {
    const categoryKeys = Object.keys(inventory.categories);
    const CKLength = categoryKeys.length;
    const options = [];

    const capitalize = string =>
      string.charAt(0).toUpperCase() + string.slice(1);
    for (let i = 0; i < CKLength; i++) {
      options.push(<option>{capitalize(categoryKeys[i])}</option>);
    }
    return options;
  }

  updateForm() {
    const category = document.getElementById('newItemForm-category').value;
    const name = document.getElementById('newItemForm-name').value;
    const price = document.getElementById('newItemForm-price').value;
    const imageURL = document.getElementById('newItemForm-imageURL').value;
    const errors = this.state.formErrors;
    if (this.props.formData.category !== category) {
      errors.category = false;
    }
    if (this.props.formData.name !== name) {
      errors.name = false;
    }
    if (this.props.formData.price !== price) {
      errors.price = false;
    }
    if (this.props.formData.imageURL !== imageURL) {
      errors.imageURL = false;
    }
    this.setState({ formErrors: errors });

    this.props.changeForm({
      category,
      name,
      price,
      imageURL,
    });
  }

  render() {
    return (
      <div className="NewItemTab">
        <div className="newItem-input">
          <h1>Add A New Item</h1>
          <p>
            <label>Category</label>
            <select
              className={
                this.state.formErrors.category === true ? 'formCheck-err' : ''
              }
              id="newItemForm-category"
              value={this.props.formData.category}
              onChange={() => this.updateForm()}>
              <option />
              {this.renderCategorySelections(this.props.inventory)}
            </select>
          </p>
          <p>
            <label>Product Name</label>
            <input
              className={
                this.state.formErrors.name === true ? 'formCheck-err' : ''
              }
              type="text"
              required
              id="newItemForm-name"
              value={this.props.formData.name}
              onChange={() => this.updateForm()}
            />
          </p>
          <p>
            <label>Price per Unit</label>
            <input
              className={
                this.state.formErrors.price === true ? 'formCheck-err' : ''
              }
              type="number"
              required
              id="newItemForm-price"
              value={this.props.formData.price}
              onChange={() => this.updateForm()}
            />
          </p>
          <p>
            <label>Image URL</label>
            <input
              className={
                this.state.formErrors.imageURL === true ? 'formCheck-err' : ''
              }
              type="text"
              required
              id="newItemForm-imageURL"
              value={this.props.formData.imageURL}
              onChange={() => this.updateForm()}
              placeholder="Paste link here"
            />
          </p>
          <button onClick={() => this.checkForm()}>Add Product</button>
        </div>
        <div className="newItem-preview">
          <h1>Preview</h1>
          <ProductCard product={this.props.formData} />
        </div>
      </div>
    );
  }
}

export default NewItemTab;
