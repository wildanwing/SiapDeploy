import React from 'react';

export default function SearchBar() {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col">
                    <form className="form-inline float-right">
                        <div className="input-group mb-2">
                            <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control py-1 px-5" placeholder="donasi & berita" />
                            </div>
                        </div>

                        <button type="submit" className="btn  btn-search mb-2 px-3 py-1">Cari</button>

                    </form>
                </div>
            </div>
        </div>
    )
}
