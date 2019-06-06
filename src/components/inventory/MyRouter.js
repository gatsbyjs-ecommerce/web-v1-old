import React from 'react';
import ProductsTab from './ProductsTab';
import NewItemTab from './NewItemTab';

class MyRouter extends React.Component {
  route(active) {
    switch (active) {
      case 0:
        return (
          <NewItemTab
            inventory={this.props.inventory}
            formData={this.props.newItemFormData}
            changeForm={this.props.changeNewItemForm}
            addNewProduct={this.props.addNewProduct}
          />
        );
        break;
      case 1:
        return <ProductsTab inventory={this.props.inventory} />;
        break;
    }
  }

  render() {
    return <div className="MyRouter">{this.route(this.props.activeTab)}</div>;
  }
}

export default MyRouter;
