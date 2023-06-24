export function createElement(ele, props, ...children) {
  let virtualDOM = {
    $$typeof: Symbol("react-element"),
    key: null,
    ref: null,
    type: null,
    props: {},
  };

  virtualDOM.type = ele;

  if (!props) {
    virtualDOM.props = {
      ...props,
    };
  }

  const len = children.length;

  if (len === 1) virtualDOM.props.children = children[0];
  if (len > 1) virtualDOM.props.children = children;
  return virtualDOM;
}
