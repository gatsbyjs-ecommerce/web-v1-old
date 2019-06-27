import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MyRouter from './MyRouter';

class InventoryManagementApp extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
      inventory: {
        categories: {
          dresses: [],
          shirts: [
            {
              category: 'shirts',
              name: 'Pizza, Hentai, and Wifi T-Shirt',
              price: '16.99',
              imageURL:
                'https://cdn.shopify.com/s/files/1/0797/0169/products/mockup-c6d64730_1024x1024.jpg',
            },
          ],
          pants: [],
          accessories: [],
        },
      },
      newItemForm: {
        category: '',
        name: '',
        price: '',
        imageURL: '',
      },
    };
  }

  changeActiveTab(index) {
    this.setState({ activeTab: index });
  }

  changeNewItemForm(formData) {
    this.setState({ newItemForm: formData });
  }

  addNewProduct(product) {
    this.setState({
      newItemForm: { category: '', name: '', price: '', imageURL: '' },
    });

    const decapitalize = string =>
      string.charAt(0).toLowerCase() + string.slice(1);

    product.category = decapitalize(product.category);
    const { inventory } = this.state;
    inventory.categories[product.category].push(product);

    this.setState({ inventory });
  }

  render() {
    return (
      <div className="InventoryManagementApp">
        <h2 className="header">
          <i className="icon-th-list" /> Inventory Management Application Demo
        </h2>
        <h1 className="title" onClick={() => this.changeActiveTab(1)}>
          Inventory
        </h1>
        <div className="app-body">
          <Sidebar
            activeTab={this.state.activeTab}
            changeTab={this.changeActiveTab}
          />
          <MyRouter
            activeTab={this.state.activeTab}
            inventory={this.state.inventory}
            newItemFormData={this.state.newItemForm}
            changeNewItemForm={this.changeNewItemForm}
            addNewProduct={this.addNewProduct}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default InventoryManagementApp;
