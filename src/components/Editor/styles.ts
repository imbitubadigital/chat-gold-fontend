import styled from 'styled-components';
export const Container = styled.div`
  .jodit_custom {
    background: #94a3b8;
    padding: 1px;
    border-radius: 3px;
    .jodit-wysiwyg {
      background: #f8fafc;
      border: 1px solid #cbd5e1;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        background-color: #cbd5e1;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #64748b;
        border-radius: 50px;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #94a3b8;
      }
    }
    // .jodit-container jodit jodit_theme_default jodit-wysiwyg_mode jodit_theme_summer

    .jodit-toolbar__box {
      background: #cbd5e1;
      border: 1px solid #cbd5e1;
    }
    .jodit-jodit-container {
      background: yellow;
    }

    .jodit-workplace {
      border: 1px solid #cbd5e1;
    }

    //.jodit-status-bar jodit-status-bar_resize-handle_true
    .jodit-status-bar {
      background: #cbd5e1;
      border: 1px solid #cbd5e1;
    }
    .jodit-ui-group_line_true {
      border: 1px solid #cbd5e1;
    }

    // jodit-ui-group jodit-ui-group_size_middle jodit-ui-group_line_true
  }
`;
